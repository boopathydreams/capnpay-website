"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"
import { ReactNode, useEffect, useState } from "react"

interface ThemeProviderProps {
  children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange={false}
      storageKey="capnpay-theme"
      themes={['light', 'dark']}
      // Force initial theme to dark if not mounted yet
      forcedTheme={!mounted ? "dark" : undefined}
    >
      {children}
    </NextThemesProvider>
  )
}