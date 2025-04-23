// eslint-disable-next-line no-unused-vars
import React, { useState } from "react"
import { Box, Button, Text, Flex, Stack, ActionIcon } from "@mantine/core"
import { IconPlus, IconSearch } from "@tabler/icons-react"
import "./app-layout.css"

function NavBar() {
  return (
    <Box>
      <Flex justify={"flex-end"} gap={10} my={8}>
        <ActionIcon variant="default" size={"lg"} radius={"xl"}>
          <IconSearch size={16} />
        </ActionIcon>
        <ActionIcon variant="default" size={"lg"} radius={"xl"}>
          <IconPlus size={20} />
        </ActionIcon>
      </Flex>
      <Stack gap={8} className="chat-btns">
        <Text fw={600} size={"xs"}>
          Today
        </Text>
        <Button variant="light" radius={"md"} justify="flex-start">
          SOP document queries
        </Button>
        <Button
          variant="default"
          radius={"md"}
          className="btn"
          justify="flex-start"
        >
          New Chat 2
        </Button>
        <Button
          variant="default"
          radius={"md"}
          className="btn"
          justify="flex-start"
        >
          New Chat 3
        </Button>
      </Stack>
    </Box>
  )
}

export default NavBar
