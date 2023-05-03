import "src/styles/global.css";
import Cookies from "js-cookie";
import type { AppProps } from "next/app";
import { cacheExchange, createClient, fetchExchange, Provider } from "urql";
import { NavigationBar } from "@app/navigation/NavigationBar";
import { Container } from "@mui/material";
import AuthProvider from "@app/core/auth/AuthProvider";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

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

const independentSubpaths = ["/dev-login", "/go", "/login"];

export default function App({ Component, pageProps, router }: AppProps) {
  if (independentSubpaths.some((path) => router.pathname.includes(path))) {
    return (
      <Provider value={client}>
        <Component {...pageProps} />
      </Provider>
    );
  }

  return (
    <Provider value={client}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <AuthProvider>
          <NavigationBar />
          <Container maxWidth={false} sx={{ mt: 2 }}>
            <Component {...pageProps} />
          </Container>
        </AuthProvider>
      </LocalizationProvider>
    </Provider>
  );
}
