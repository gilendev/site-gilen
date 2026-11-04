import { useEffect, useState, type ReactNode } from "react";
import { ThemeContext, type Theme } from "@/components/theme-context";

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
  attribute?: string;
}

export function ThemeProvider({ children, defaultTheme = "light", storageKey = "gilen-theme" }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem(storageKey) as Theme) || defaultTheme;
    }
    return defaultTheme;
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem(storageKey, theme);
  }, [theme, storageKey]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
