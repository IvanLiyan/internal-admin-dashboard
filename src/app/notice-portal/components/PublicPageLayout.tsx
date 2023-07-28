import ToastProvider from "@app/core/toast/ToastProvider";
import { Container, ThemeProvider, createTheme } from "@mui/material";

const PublicPageLayout = ({ children }: React.PropsWithChildren) => {
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
    <ThemeProvider theme={theme}>
      <ToastProvider>
        <Container sx={{ mt: 5, pb: 5 }}>{children}</Container>
      </ToastProvider>
    </ThemeProvider>
  );
};

export default PublicPageLayout;
