// eslint-disable-next-line no-unused-vars
import React, { useState } from "react"

import { Stack } from "@mantine/core"
import { useImmer } from "use-immer"
import Field from "./Field"
import BubbleStack from "./BubbleStack"

function Chat() {
  const [conversation, setConversation] = useImmer([])

  const onMessageSend = (msg) => {
    const bubble = { msg, isUser: true, timestamp: new Date() }
    setConversation(() => {
      return [
        ...conversation,
        bubble,
        { msg: "Im good, how can i help you?", isUser: false },
      ]
    })
  }

  return (
    <Stack
      gap={16}
      justify="space-between"
      align="center"
      h={"calc(100vh - 80px)"}
      py={16}
      px={"18vw"}
    >
      {conversation.length > 0 && <BubbleStack conversation={conversation} />}
      <Field onMessageSend={onMessageSend} newChat={conversation.length < 1} />
    </Stack>
  )
}

export default Chat
