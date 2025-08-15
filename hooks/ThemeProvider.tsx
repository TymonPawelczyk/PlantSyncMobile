import React, { createContext, useState } from "react";
import { Appearance } from "react-native";

export const ThemeContext = createContext({
  theme: Appearance.getColorScheme() ?? "light",
  toggleTheme: () => {},
});

export const ThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState(Appearance.getColorScheme() ?? "light");
  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};