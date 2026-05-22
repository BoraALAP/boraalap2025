'use client'

import { ThemeProvider } from 'next-themes'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export function Providers({ children }: { children: React.ReactNode}) {
  const [mounted, setMounted] = useState(false)

  const pathname = usePathname()
  
  // Keep the archived developer view dark while the main portfolio stays light.
  const forcedTheme = pathname === '/developer' || pathname.startsWith('/2025/developer') ? 'dark' : "light"

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <ThemeProvider forcedTheme={forcedTheme} >
      {children}
    </ThemeProvider>
  )
}
