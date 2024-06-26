'use client'

import React from 'react'
import { SnackbarProvider } from 'notistack'

const NotificationProvider = ({ children }) => {
    return (
        <SnackbarProvider maxSnack={3}>
            {children}
        </SnackbarProvider>
    )
}

export default NotificationProvider
