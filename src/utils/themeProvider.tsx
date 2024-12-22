'use client'

import { ThemeProvider } from 'next-themes'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export function Providers({ children }: { children: React.ReactNode}) {
  const [mounted, setMounted] = useState(false)

  const pathname = usePathname()
  
  // Define your forced theme logic here
  const forcedTheme = pathname === '/developer' ? 'dark' : "light"

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
