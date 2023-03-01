import React from 'react'
import '@/styles/globals.css'

type LayoutProps = React.PropsWithChildren<{}>

const Layout = ({children}: LayoutProps) => {
  return (
    <html lang="en">
      <head />
      <body>
        <div className="w-full h-screen flex justify-center items-center bg-slate-300">
          {children}
        </div>
      </body>
    </html>
  )
}

export default Layout

