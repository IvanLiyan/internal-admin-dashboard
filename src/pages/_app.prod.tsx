import AuthProvider from "@app/core/auth/AuthProvider";
import { NavigationBar } from "@app/navigation/NavigationBar";
import { Container, ThemeProvider, createTheme } from "@mui/material";
import Cookies from "js-cookie";
import type { AppProps } from "next/app";
import "src/styles/global.css";
import { cacheExchange, createClient, fetchExchange, Provider } from "urql";

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
  const theme = createTheme({
    typography: {
      fontFamily: "Proxima",
      fontWeightLight: 400,
      fontWeightRegular: 400,
      fontWeightMedium: 600,
      fontWeightBold: 700,
    },
  });

  return (
    <Provider value={client}>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <NavigationBar />
          <Container maxWidth={false} sx={{ mt: 2 }}>
            <Component {...pageProps} />
          </Container>
        </ThemeProvider>
      </AuthProvider>
    </Provider>
  );
}
