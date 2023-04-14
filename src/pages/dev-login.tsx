import { NextPage } from "next";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { Button } from "@ContextLogic/atlas-ui";
import {
  CssBaseline,
  Box,
  Paper,
  Typography,
  Divider,
  Snackbar,
  Alert,
  TextField,
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
  const [currentMerchant, setCurrentMerchant] = useState("none");
  // const [mid, setMid] = useState<string | undefined>();

  const loginAsAdmin = async () => {
    setLoading((cur) => cur + 1);
    try {
      const resp = await fetch("/md-admin/api/dev-login");
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
      setCurrentMerchant(
        jsonResponse.data.currentMerchant
          ? String(jsonResponse.data.currentMerchant.id)
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

          {/* lliepert: temp removing tooltip while atlas tooltip is finalized */}
          {/* <Tooltip
            content={() => (
              <Box sx={{ maxWidth: 300 }}>
                Log in to Merch-FE as your admin account, stored in .env.local.
              </Box>
            )}
            placement="right"
          > */}
          <Button
            primary
            onClick={loginAsAdmin}
            style={{ display: "block", width: "100%", margin: "10px 0px" }}
            disabled={loading}
          >
            Login as Admin
          </Button>
          {/* </Tooltip>
          <Tooltip
            content={() => (
              <Box sx={{ maxWidth: 300 }}>
                Log into Merch-FE as your admin account, if not yet logged in,
                then as the MID specified in your .env.local file via \go.
              </Box>
            )}
            placement="right"
          > */}
          {/* <TextField
            value={mid}
            fullWidth
            onChange={(e) => {
              setMid(e.target.value);
            }}
            placeholder="MID"
          /> */}
          {/* <Button
            primary
            onClick={loginAsMerchant}
            style={{ display: "block", width: "100%", margin: "10px 0px" }}
            disabled={loading}
          >
            Login as Merchant
          </Button> */}
          {/* </Tooltip>

          <Tooltip
            content={() => <Box>Log out of Merch-FE via /logout.</Box>}
            placement="right"
          > */}
          <Button
            primary
            onClick={logout}
            style={{ display: "block", width: "100%", margin: "10px 0px" }}
            disabled={loading}
          >
            Logout
          </Button>
          {/* </Tooltip> */}

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
