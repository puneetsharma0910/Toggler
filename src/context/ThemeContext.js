import { createContext, useContext } from "react";

// Create context with a default value (object)
export const ThemeContext = createContext({
  themeMode: "light",
  lightTheme: () => {},
  darkTheme: () => {},
});

// Export the provider component
export const ThemeProvider = ThemeContext.Provider;

// Custom hook to use theme context
export const useTheme = () => {
  return useContext(ThemeContext);
};
