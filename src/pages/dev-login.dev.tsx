import { NextPage } from "next";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import {
  CssBaseline,
  Box,
  Paper,
  Typography,
  Divider,
  Snackbar,
  Alert,
  Button,
} from "@mui/material";

const useError = (
  initialState: string | null
): [
  errorBody: string | null,
  errorOpen: boolean,
  setError: (error: string, ...rest: unknown[]) => void,
  closeError: () => void
] => {
  const [errorBody, setErrorBody] = useState<string | null>(initialState);
  const [errorOpen, setErrorOpen] = useState(false);

  const onError = (errorProp: string, ...rest: unknown[]) => {
    setErrorBody(errorProp);
    setErrorOpen(true);
    console.log(errorProp, ...rest);
  };

  const onClose = () => {
    setErrorOpen(false);
  };

  return [errorBody, errorOpen, onError, onClose];
};

const DevLoginPage: NextPage<Record<string, never>> = () => {
  // use numbers to emulate a stack of requests that need to complete before
  // loading is finished
  const [loading_, setLoading] = useState(0);
  const loading = Boolean(loading_);
  const [errorBody, errorOpen, setError, closeError] = useError(null);
  const [currentUser, setCurrentUser] = useState("none");

  const loginAsAdmin = async () => {
    setLoading((cur) => cur + 1);
    try {
      const resp = await fetch("/internal-admin/api/dev-login");
      if (!resp.ok) {
        setError(
          "An error occurred while logging you in. Please see the console for more details.",
          resp
        );
        return;
      }
      void fetchCurrentUser();
    } finally {
      setLoading((cur) => cur - 1);
    }
  };

  const logout = async () => {
    setLoading((cur) => cur + 1);
    try {
      const resp = await fetch("/logout");
      if (!resp.ok && !resp.redirected) {
        setError(
          "An error occurred while logging you in. Please see the console for more details.",
          resp
        );
        return;
      }
      void fetchCurrentUser();
    } finally {
      setLoading((cur) => cur - 1);
    }
  };

  const fetchCurrentUser = async () => {
    setLoading((cur) => cur + 1);
    try {
      const xsrf = Cookies.get("_xsrf");

      if (xsrf === undefined) {
        setError(
          "XSRF cookie is missing, aborting /api/graphql fetch. Have you logged into the dashboard via dev-login yet? If not, try that."
        );
        return;
      }

      const resp = await fetch("/api/graphql", {
        body: '{"operationName":null,"variables":{},"query":"{\\n  currentMerchant {\\n    id\\n  }\\n  currentUser {\\n    id\\n  }\\n}\\n"}',
        method: "POST",
        headers: {
          "cache-control": "no-cache",
          "content-type": "application/json",
          accept: "application/json",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "x-xsrftoken": xsrf,
        },
        mode: "cors",
        credentials: "include",
      });
      const jsonResponse = await resp.json();
      setCurrentUser(
        jsonResponse.data.currentUser
          ? String(jsonResponse.data.currentUser.id)
          : "none"
      );
    } catch (e) {
      setError(
        "An error occurred while fetching api/graphql. Have you logged into the dashboard via dev-login yet? If not, try that. (You can view the full error in the console.)",
        e
      );
    } finally {
      setLoading((cur) => cur - 1);
    }
  };

  useEffect(() => {
    void fetchCurrentUser();
    // only want to run on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
          display: "flex",
        }}
      >
        <Paper variant="outlined" sx={{ padding: 4, margin: "auto" }}>
          <Typography variant="h4" component="h1">
            Developer Login
          </Typography>

          <Divider sx={{ marginTop: 1, marginBottom: 1 }} />

          <Button
            variant="contained"
            onClick={loginAsAdmin}
            style={{ display: "block", width: "100%", margin: "10px 0px" }}
            disabled={loading}
          >
            Login as Admin
          </Button>
          <Button
            variant="contained"
            onClick={logout}
            style={{ display: "block", width: "100%", margin: "10px 0px" }}
            disabled={loading}
          >
            Logout
          </Button>

          <Divider sx={{ marginTop: 1, marginBottom: 1 }} />

          <Paper variant="outlined" sx={{ bgcolor: "grey.200", padding: 1 }}>
            <Typography component={"div"}>
              Current User ID:{" "}
              <Typography fontFamily="monospace" component="span">
                {currentUser}
              </Typography>
            </Typography>

            <Typography component={"div"}>
              Merch-FE Target:{" "}
              <Typography fontFamily="monospace" component="span">
                {process.env.NEXT_PUBLIC_MD_URL}
              </Typography>
            </Typography>
          </Paper>
        </Paper>
      </Box>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={errorOpen}
        onClose={closeError}
        message={errorBody}
      >
        <Alert variant="filled" severity="error">
          {errorBody}
        </Alert>
      </Snackbar>
    </>
  );
};

export default DevLoginPage;
