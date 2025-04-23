// eslint-disable-next-line no-unused-vars
import React from "react"
import {
  Button,
  Flex,
  Paper,
  Skeleton,
  Stack,
  Text,
  useMantineTheme,
} from "@mantine/core"
import Markdown from "react-markdown"
import { IconAlertTriangle } from "@tabler/icons-react"

function Bubble({ data }) {
  const theme = useMantineTheme()
  return (
    <Flex justify={data.isUser ? "flex-end" : "flex-start"}>
      {!data?.isPending && !data?.isError && (
        <Paper px={16} py={0} bg={data.isUser ? theme.colors.dark[6] : ""}>
          <Text fw={500} size="md" py={0}>
            <Markdown>{data?.msg}</Markdown>
          </Text>
        </Paper>
      )}
      {data?.isPending && (
        <Stack gap={6}>
          <Skeleton height={25} circle />
          <Skeleton height={8} radius="xl" w={240} />
          <Skeleton height={8} radius="xl" w={240} />
        </Stack>
      )}
      {data?.isError && (
        <Button
          variant="light"
          color="red"
          leftSection={<IconAlertTriangle size={20} />}
        >
          {data?.msg}
        </Button>
      )}
    </Flex>
  )
}

export default Bubble
