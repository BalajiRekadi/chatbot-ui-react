// eslint-disable-next-line no-unused-vars
import React from "react"
import { Flex, Paper, Skeleton, Text, useMantineTheme } from "@mantine/core"

function Bubble({ data }) {
  const theme = useMantineTheme()
  return (
    <Flex justify={data.isUser ? "flex-end" : "flex-start"}>
      <Paper p={16} bg={data.isUser ? theme.colors.dark[6] : ""}>
        {!data?.isLoading && (
          <Text fw={500} size="lg">
            {data?.msg}
          </Text>
        )}
        {data?.isLoading && (
          <>
            <Skeleton height={25} circle mb="sm" />
            <Skeleton height={8} mt={8} radius="xl" w={240} />
            <Skeleton height={8} mt={8} radius="xl" w={240} />
          </>
        )}
      </Paper>
    </Flex>
  )
}

export default Bubble
