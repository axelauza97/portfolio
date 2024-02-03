import { createContext, useState } from "react";

export const LoaderContext = createContext();
export const LoaderProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState({
    isLoading: false,
    message: "",
  });
  return (
    <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoaderContext.Provider>
  );
};
