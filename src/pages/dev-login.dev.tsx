import {
  Alert,
  Box,
  Button,
  Divider,
  Paper,
  Snackbar,
  Typography,
} from "@mui/material";
import { UserSchema } from "@schema";
import Cookies from "js-cookie";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { graphql } from "src/schema";
import { gql, useMutation, useQuery } from "urql";

const loginMutation = graphql(`
  mutation Authentication_LoginMutation($input: LoginMutationInput!) {
    authentication {
      login(input: $input) {
        loginOk
        error
        errorState
      }
    }
  }
`);

type GetUserResponse = {
  readonly currentUser?: Pick<UserSchema, "id">;
};

const GetUserQuery = gql<GetUserResponse, void>`
  query {
    currentUser {
      id
    }
  }
`;

const DevLoginPage: NextPage<Record<string, never>> = () => {
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMsg, setToastMsg] = useState("");

  const [loginResult, login] = useMutation(loginMutation);
  const [userResult, getUser] = useQuery({
    query: GetUserQuery,
    pause: true,
    requestPolicy: "network-only",
  });

  useEffect(() => {
    const xsrf = Cookies.get("_xsrf");
    if (xsrf == undefined) {
      fetch(`/md/login`)
        .then(() => {
          getUser();
        })
        .catch((e) => {
          setToastOpen(true);
          setToastMsg(e);
        });
    } else {
      getUser();
    }
  }, [getUser]);

  useEffect(() => {
    if (!loginResult.data?.authentication?.login?.loginOk) {
      return;
    }
    getUser();
  }, [getUser, loginResult]);

  useEffect(() => {
    if (loginResult.error?.message != null) {
      setToastOpen(true);
      setToastMsg(loginResult.error.message);
    }
  }, [loginResult?.error?.message]);

  const logout = () => {
    fetch("/logout", { redirect: "manual" }).then(() => {
      getUser();
    });
  };

  return (
    <>
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
          display: "flex",
        }}
      >
        <Paper variant="outlined" sx={{ padding: 4, margin: "auto" }}>
          <Typography variant="h4" component="h1">
            Admin Login
          </Typography>

          <Divider sx={{ marginTop: 1, marginBottom: 1 }} />

          <Button
            variant="contained"
            onClick={() =>
              login({
                input: {
                  username: process.env.NEXT_PUBLIC_USERNAME || "",
                  password: process.env.NEXT_PUBLIC_PASSWORD || "",
                },
              })
            }
            style={{ display: "block", width: "100%", margin: "10px 0px" }}
            disabled={loginResult.fetching || userResult.fetching}
          >
            Login
          </Button>
          <Button
            variant="contained"
            onClick={logout}
            style={{ display: "block", width: "100%", margin: "10px 0px" }}
            disabled={loginResult.fetching || userResult.fetching}
          >
            Logout
          </Button>

          <Divider sx={{ marginTop: 1, marginBottom: 1 }} />

          <Paper variant="outlined" sx={{ bgcolor: "grey.200", padding: 1 }}>
            <Typography component={"div"}>
              Current User ID:{" "}
              <Typography fontFamily="monospace" component="span">
                {userResult.data?.currentUser?.id || "None"}
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
        open={toastOpen}
        autoHideDuration={6000}
      >
        <Alert variant="filled" severity="error">
          {toastMsg}
        </Alert>
      </Snackbar>
    </>
  );
};

export default DevLoginPage;
