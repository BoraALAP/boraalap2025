import React from 'react'

// Layout keeps the archived 2025 case-study pages horizontally contained.
export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className="relative flex w-full flex-col overflow-x-hidden">
      <div className="flex flex-col">
      {children}
      </div>
    </div>
  )
}
