// eslint-disable-next-line no-unused-vars
import React from "react"
import { Flex, Paper, Skeleton, Text, useMantineTheme } from "@mantine/core"
import Markdown from "react-markdown"

function Bubble({ data }) {
  const theme = useMantineTheme()
  return (
    <Flex justify={data.isUser ? "flex-end" : "flex-start"}>
      <Paper px={16} py={0} bg={data.isUser ? theme.colors.dark[6] : ""}>
        {!data?.isPending && (
          <Text fw={500} size="md" py={0}>
            <Markdown>{data?.msg}</Markdown>
          </Text>
        )}
        {data?.isPending && (
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
