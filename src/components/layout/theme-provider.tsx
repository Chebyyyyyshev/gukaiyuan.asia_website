"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type Theme = "system" | "light" | "dark";
type ResolvedTheme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: Theme) => void;
};

type ThemeProviderProps = {
  children: ReactNode;
  defaultTheme?: Theme;
  enableSystem?: boolean;
};

const storageKey = "theme";
const ThemeContext = createContext<ThemeContextValue | null>(null);

function resolveTheme(theme: Theme, enableSystem: boolean): ResolvedTheme {
  if (theme !== "system") {
    return theme;
  }

  if (!enableSystem || typeof window === "undefined") {
    return "light";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyResolvedTheme(resolvedTheme: ResolvedTheme) {
  document.documentElement.classList.remove("light", "dark");
  document.documentElement.classList.add(resolvedTheme);
}

export function ThemeProvider({
  children,
  defaultTheme = "system",
  enableSystem = true,
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme);
  const [systemTheme, setSystemTheme] = useState<ResolvedTheme>(() =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light",
  );
  const resolvedTheme =
    theme === "system" && enableSystem ? systemTheme : resolveTheme(theme, false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const storedTheme = window.localStorage.getItem(storageKey) as Theme | null;
      if (
        storedTheme === "light" ||
        storedTheme === "dark" ||
        storedTheme === "system"
      ) {
        setThemeState(storedTheme);
        return;
      }

      setThemeState(defaultTheme);
    }, 0);

    return () => window.clearTimeout(timer);
  }, [defaultTheme]);

  useEffect(() => {
    applyResolvedTheme(resolvedTheme);
  }, [resolvedTheme]);

  useEffect(() => {
    if (!enableSystem) {
      return undefined;
    }

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      setSystemTheme(media.matches ? "dark" : "light");
    };

    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, [enableSystem]);

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme,
      resolvedTheme,
      setTheme: (nextTheme) => {
        window.localStorage.setItem(storageKey, nextTheme);
        setThemeState(nextTheme);
      },
    }),
    [resolvedTheme, theme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useSiteTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useSiteTheme must be used within ThemeProvider");
  }

  return context;
}
