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
} from "@mantine/core"
import { useForm } from "@mantine/form"
import { IconPlus, IconWorld, IconBulb, IconArrowUp } from "@tabler/icons-react"

function Field({ onMessageSend, newChat = true }) {
  const theme = useMantineTheme()
  const queryForm = useForm({
    mode: "uncontrolled",
    initialValues: {
      query: "",
    },
  })

  const handleEnter = (msg) => {
    onMessageSend(msg)
    queryForm.reset()
  }

  return (
    <Stack p={newChat ? "33vh" : ""}>
      {newChat && (
        <Text size="32px" fw={700}>
          Hi, Need help with your pharma work?
        </Text>
      )}
      <Paper h={"136"} w={"45vw"} radius={"lg"} bg={theme.colors.dark[6]}>
        <form
          onSubmit={queryForm.onSubmit((values) => handleEnter(values.query))}
        >
          <TextInput
            autoFocus
            variant="unstyled"
            placeholder="Ask Anything.."
            size="lg"
            px={24}
            py={16}
            key={queryForm.key("query")}
            {...queryForm.getInputProps("query")}
          ></TextInput>
          <Flex justify={"space-between"}>
            <Flex align={"center"} gap={16} justify={"flex-start"} ml={16}>
              <ActionIcon radius={"xl"} variant="outline" size={36}>
                <IconPlus />
              </ActionIcon>
              <Button
                leftSection={<IconWorld />}
                radius={"lg"}
                variant="outline"
              >
                Search
              </Button>
              <Button
                leftSection={<IconBulb />}
                radius={"lg"}
                variant="outline"
              >
                Reason
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
