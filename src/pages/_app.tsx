import "src/styles/global.css";
import Cookies from "js-cookie";
import type { AppProps } from "next/app";
import { cacheExchange, createClient, fetchExchange, Provider } from "urql";
import { AtlasThemeProvider } from "@ContextLogic/atlas-ui";

const client = createClient({
  url: `/api/graphql`,
  exchanges: [cacheExchange, fetchExchange],
  fetchOptions: () => {
    const xsrf = Cookies.get("_xsrf");
    return {
      headers: {
        "X-XSRFToken": xsrf || "",
      },
    };
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AtlasThemeProvider>
      <Provider value={client}>
        <Component {...pageProps} />
      </Provider>
    </AtlasThemeProvider>
  );
}
