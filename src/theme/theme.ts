"use client";
import { createTheme } from "@mui/material/styles";
import useColorMode from "../hooks/useColorMode";

const theme = createTheme({
  typography: {
    fontFamily: "var(--font-roboto)",
  },
  cssVariables: true,
  // colorSchemes: {
  //   light: true,
  //   dark: true,
  // },
});

export default theme;
