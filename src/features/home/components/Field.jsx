// eslint-disable-next-line no-unused-vars
import React from "react"
import {
  ActionIcon,
  Button,
  Flex,
  Paper,
  TextInput,
  Text,
  useMantineTheme,
  Stack,
  Group,
} from "@mantine/core"
import { useForm } from "@mantine/form"
import { IconPlus, IconWorld, IconArrowUp } from "@tabler/icons-react"

function Field({
  onMessageSend,
  newChat = true,
  isSearchMode = false,
  setIsSearchMode,
  isPending = false,
}) {
  const theme = useMantineTheme()

  const queryForm = useForm({
    mode: "uncontrolled",
    initialValues: {
      query: "",
    },
  })

  const handleEnter = (msg) => {
    if (msg && !isPending) {
      onMessageSend(msg)
      queryForm.reset()
    }
  }

  return (
    <Stack
      py={newChat ? "33vh" : ""}
      w={"100%"}
      gap={0}
      justify="space-between"
    >
      <Group justify="center">
        {newChat && (
          <Text size="28px" fw={600} mb={16}>
            Hi, Need help with your pharma work?
          </Text>
        )}
      </Group>
      <Paper h={"112"} radius={"lg"} bg={theme.colors.dark[6]} withBorder>
        <form
          onSubmit={queryForm.onSubmit((values) => handleEnter(values.query))}
        >
          <TextInput
            autoFocus
            variant="unstyled"
            placeholder={isSearchMode ? "Search Anything.." : "Ask Anything.."}
            size="md"
            px={24}
            py={8}
            key={queryForm.key("query")}
            {...queryForm.getInputProps("query")}
          ></TextInput>
          <Flex justify={"space-between"}>
            <Flex align={"center"} gap={16} justify={"flex-start"} ml={16}>
              <ActionIcon
                radius={"xl"}
                variant="outline"
                size={36}
                color="grey"
              >
                <IconPlus />
              </ActionIcon>
              <Button
                color={isSearchMode ? "yellow" : "grey"}
                leftSection={<IconWorld />}
                radius={"lg"}
                variant={isSearchMode ? "light" : "outline"}
                onClick={() => setIsSearchMode(!isSearchMode)}
              >
                Search
              </Button>
            </Flex>
            <ActionIcon type="submit" radius={"xl"} size={42} mx={16}>
              <IconArrowUp />
            </ActionIcon>
          </Flex>
        </form>
      </Paper>
    </Stack>
  )
}

export default Field
