import { Box, CircularProgress } from "@mui/material";

const LoadingIndicator: React.FC = () => {
  return (
    <Box sx={{ width: "100vw", display: "flex" }}>
      <CircularProgress sx={{ margin: "auto" }} />
    </Box>
  );
};

export default LoadingIndicator;
