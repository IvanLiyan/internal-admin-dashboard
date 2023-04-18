import "src/styles/global.css";
import Cookies from "js-cookie";
import type { AppProps } from "next/app";
import { cacheExchange, createClient, fetchExchange, Provider } from "urql";
import { NavigationBar } from "@app/navigation/NavigationBar";
import { Container } from "@mui/material";

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
    <Provider value={client}>
      <NavigationBar />
      <Container maxWidth={false} sx={{ mt: 2 }}>
        <Component {...pageProps} />
      </Container>
    </Provider>
  );
}
