import React from 'react'

const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-screen p-4">
      <div className="flex flex-col w-full">
        {children}
      </div>
    </div>
  )
}

export default BaseLayout