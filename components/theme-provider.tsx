"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // This effect will run on the client side only
  React.useEffect(() => {
    // Clear localStorage theme to ensure system preference takes precedence
    localStorage.removeItem("theme");
  }, []);

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
