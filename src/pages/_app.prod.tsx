import AuthProvider from "@app/core/auth/AuthProvider";
import ToastProvider from "@app/core/toast/ToastProvider";
import { NavigationBar } from "@app/navigation/NavigationBar";
import { PublicNavigationBar } from "@app/navigation/PublicNavigationBar";
import { Container, ThemeProvider, createTheme } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Cookies from "js-cookie";
import type { AppProps } from "next/app";
import "src/styles/global.css";
import { Provider, cacheExchange, createClient, fetchExchange } from "urql";

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
  const theme = createTheme({
    typography: {
      fontFamily: "Proxima",
      fontWeightLight: 400,
      fontWeightRegular: 400,
      fontWeightMedium: 600,
      fontWeightBold: 700,
    },
  });

  if (independentSubpaths.some((path) => router.pathname.includes(path))) {
    return (
      <Provider value={client}>
        <ThemeProvider theme={theme}>
          <ToastProvider>
            <PublicNavigationBar />
            <Container maxWidth={false} sx={{ mt: 2 }}>
              <Component {...pageProps} />
            </Container>
          </ToastProvider>
        </ThemeProvider>
      </Provider>
    );
  }

  return (
    <Provider value={client}>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <ToastProvider>
              <NavigationBar />
              <Container maxWidth={false} sx={{ mt: 2 }}>
                <Component {...pageProps} />
              </Container>
            </ToastProvider>
          </LocalizationProvider>
        </ThemeProvider>
      </AuthProvider>
    </Provider>
  );
}
