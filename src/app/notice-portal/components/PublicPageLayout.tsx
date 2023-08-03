import { Container } from "@mui/material";

const PublicPageLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <Container sx={{ mt: 5, pb: 5 }}>{children}</Container>;
};

export default PublicPageLayout;
