// eslint-disable-next-line no-unused-vars
import React from "react"
import { Flex, Paper, Text, useMantineTheme } from "@mantine/core"

function Bubble({ data }) {
  const theme = useMantineTheme()
  return (
    <Flex justify={data.isUser ? "flex-end" : "flex-start"}>
      <Paper p={16} bg={data.isUser ? theme.colors.dark[6] : ""}>
        <Text fw={500} size="lg">
          {data?.msg}
        </Text>
      </Paper>
    </Flex>
  )
}

export default Bubble
