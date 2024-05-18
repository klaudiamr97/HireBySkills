import React, { useContext } from "react";
import { useQuery } from "react-query";
import * as apiClient from "../api-client";

// Define the context type
type AppContextType = {
  isLoggedIn: boolean;
};

// Create the context
const AppContext = React.createContext<AppContextType | undefined>(undefined);

// AppContextProvider component
export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { isError } = useQuery("validateToken", apiClient.validateToken, {
    retry: false,
  });

  return (
    <AppContext.Provider
      value={{
        isLoggedIn: !isError,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the AppContext
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};

export default AppContext;
