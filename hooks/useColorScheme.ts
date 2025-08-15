import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

export function useColorScheme() {
  return useContext(ThemeContext).theme;
}