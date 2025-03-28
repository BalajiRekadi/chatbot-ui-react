// eslint-disable-next-line no-unused-vars
import React from "react"
import AppContextProvider from "../store/AppContextProvider"
import { createTheme, MantineProvider } from "@mantine/core"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import AppRoutes from "./routes/AppRoutes"
import { Notifications } from "@mantine/notifications"

import "@mantine/core/styles.css"
import "@mantine/notifications/styles.css"
import "@mantine/charts/styles.css"
import "mantine-react-table/styles.css"
import "@mantine/dates/styles.css"

import { THEME } from "../utils/constants"

function App() {
  const theme = createTheme(THEME)
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  })

  return (
    <AppContextProvider>
      <MantineProvider theme={theme} defaultColorScheme="dark">
        <QueryClientProvider client={queryClient}>
          <Notifications />
          <AppRoutes />
        </QueryClientProvider>
      </MantineProvider>
    </AppContextProvider>
  )
}

export default App
