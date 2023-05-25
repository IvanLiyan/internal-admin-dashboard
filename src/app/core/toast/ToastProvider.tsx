import { Alert, AlertColor, Snackbar } from "@mui/material";
import { PropsWithChildren, createContext, useContext, useState } from "react";

type toastContext = {
  alert: (sentiment: AlertColor, msg: string | null | undefined) => void;
};

const ToastContext = createContext<toastContext>({
  alert: () => {
    throw "Default error toast";
  },
});

export const useToast = () => useContext(ToastContext);

const ToastProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [severity, setSeverity] = useState<AlertColor>("info");
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  return (
    <ToastContext.Provider
      value={{
        alert(sentiment, msg) {
          if (msg == null) {
            return;
          }
          setSeverity(sentiment);
          setMessage(msg);
          setOpen(true);
        },
      }}
    >
      {open && (
        <Snackbar
          open={open}
          autoHideDuration={6000}
          anchorOrigin={{ horizontal: "center", vertical: "top" }}
          onClose={() => setOpen(false)}
        >
          <Alert severity={severity}>{message}</Alert>
        </Snackbar>
      )}
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
