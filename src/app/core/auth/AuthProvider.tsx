import { Box, CircularProgress } from "@mui/material";
import { RoleSchema, UserSchema } from "@schema";
import { PropsWithChildren, createContext, useContext } from "react";
import { gql, useQuery } from "urql";

type AuthQueryResponse = {
  readonly currentUser?: Pick<UserSchema, "id"> & {
    readonly roles?: ReadonlyArray<Pick<RoleSchema, "id">>;
  };
};

const AuthQuery = gql<AuthQueryResponse, void>`
  query AuthQuery {
    currentUser {
      id
      roles {
        id
      }
    }
  }
`;

const AuthContext = createContext<
  RecursiveRequired<AuthQueryResponse["currentUser"]>
>({ id: "", roles: [{ id: "USER" }] });

export const useAuth = () => useContext(AuthContext);

const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [{ data, fetching }] = useQuery({ query: AuthQuery });
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  if (fetching) {
    return (
      <Box sx={{ height: "100vh", width: "100vw", display: "flex" }}>
        <CircularProgress sx={{ margin: "auto" }} />
      </Box>
    );
  }
  if (data?.currentUser?.roles == null) {
    if (
      typeof window !== undefined &&
      window.location.pathname.includes(basePath)
    ) {
      window.location.assign("/login");
    }
    return null;
  }

  if (
    data?.currentUser?.roles.some(
      (role) =>
        role.id === "USER" ||
        role.id == "SUB_USER" ||
        role.id === "TEST_USER" ||
        role.id === "FACTORY" ||
        role.id === "FACTORY_ACCOUNT_MANAGER"
    )
  ) {
    if (
      typeof window !== undefined &&
      window.location.pathname.includes(basePath)
    ) {
      window.location.assign("/login");
    }
    return null;
  }

  return (
    <AuthContext.Provider
      value={{ id: data.currentUser.id, roles: data.currentUser.roles }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
