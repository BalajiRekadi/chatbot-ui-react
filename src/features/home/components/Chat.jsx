// eslint-disable-next-line no-unused-vars
import React, { useState } from "react"

import { Stack } from "@mantine/core"
import Field from "./Field"
import BubbleStack from "./BubbleStack"
import useAnswer from "../api/useAnswer"
import { useImmer } from "use-immer"

function Chat() {
  const [conversation, setConversation] = useImmer([])
  const { getAnswer, isPending, isError, isSuccess } = useAnswer()

  const onMessageSend = async (msg) => {
    const data = await getAnswer(msg)
    setConversation((convo) => {
      return [
        ...convo,
        { msg, isUser: true },
        {
          msg: data?.answer?.content,
          isUser: false,
          isLoading: true,
        },
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
