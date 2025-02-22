"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
  Theme,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

interface ThemeContextType {
  mode: "light" | "dark";
  toggleTheme: () => void;
  isFeatureEnabled: boolean;
  setIsFeatureEnabled: (enabled: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const [isFeatureEnabled, setIsFeatureEnabled] = useState<boolean>(true); // Feature toggle

  // Load theme preference from localStorage
  useEffect(() => {
    const savedTheme =
      (localStorage.getItem("theme") as "light" | "dark") || "light";
    setMode(savedTheme);
  }, []);

  const theme: Theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  const toggleTheme = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("theme", newMode);
  };

  return (
    <ThemeContext.Provider
      value={{ mode, toggleTheme, isFeatureEnabled, setIsFeatureEnabled }}
    >
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
}
