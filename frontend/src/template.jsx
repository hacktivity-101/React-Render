import { SnackbarProvider } from 'notistack'
import React from 'react'

const template = ({children}) => {
  return (
    <SnackbarProvider>
    <div>
    {children}
    </div>
    </SnackbarProvider>
  )
}

export default template