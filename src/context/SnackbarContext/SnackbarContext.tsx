import React, { createContext, useContext, ReactNode, useState } from "react";
import { EMPTY_STRING, SEVERITY } from "utils/constants";
import { Snackbar } from "@components/index";

// Define the type for the Snackbar context
type SnackbarContextType = {
  setSnackbar: (message: string, severity: string) => void;
};

type SnackbarStateType = {
  open: boolean;
  message: string;
  severity: string;
};

const DEFAULT_SNACKBAR_STATE = {
  open: false,
  message: EMPTY_STRING,
  severity: SEVERITY.ERROR,
};

// Create the context
const SnackbarContext = createContext<SnackbarContextType | undefined>(
  undefined
);

// Custom Snackbar Provider
export const SnackbarProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [snackbarState, setSnackbarState] = useState<SnackbarStateType>(
    DEFAULT_SNACKBAR_STATE
  );

  const setSnackbar: SnackbarContextType["setSnackbar"] = (
    message,
    severity
  ) => {
    setSnackbarState({ open: true, message, severity });
  };

  const closeSnackbar = () => {
    setSnackbarState(DEFAULT_SNACKBAR_STATE);
  };

  return (
    <SnackbarContext.Provider value={{ setSnackbar }}>
      {children}
      {snackbarState.open && (
        <Snackbar
          onClose={closeSnackbar}
          message={snackbarState.message}
          severity={snackbarState.severity}
        />
      )}
    </SnackbarContext.Provider>
  );
};

// Custom hook to use the Snackbar context
export const useSnackbar = (): SnackbarContextType => {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error("useSnackbar must be used within a SnackbarProvider");
  }
  return context;
};
