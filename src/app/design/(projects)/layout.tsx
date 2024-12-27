import React from 'react'

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className="relative flex w-full flex-col overflow-x-hidden">
      <div className="flex flex-col">
      {children}
      </div>
    </div>
  )
}