// eslint-disable-next-line no-unused-vars
import React from "react"
import { Box, Paper } from "@mantine/core"
import Chat from "./Chat"

function Home() {
  return (
    <Paper
      h={"calc(100vh - 72px)"}
      bg={"var(--mantine-color-body)"}
      radius={"md"}
      m={16}
      mt={0}
    >
      <Box h={"100%"}>
        <Chat />
      </Box>
    </Paper>
  )
}

export default Home
