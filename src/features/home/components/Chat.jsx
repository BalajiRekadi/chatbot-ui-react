// eslint-disable-next-line no-unused-vars
import React, { useState } from "react"

import { Stack } from "@mantine/core"
import Field from "./Field"
import BubbleStack from "./BubbleStack"
import useAnswer from "../api/useAnswer"
import { useImmer } from "use-immer"

function Chat() {
  const [conversation, setConversation] = useImmer([])
  const [isSearchMode, setIsSearchMode] = useState(false)
  const [isPending, setIsPending] = useState(false)
  const { getAnswer } = useAnswer()

  const onMessageSend = async (query) => {
    setConversation((convo) => {
      return [
        ...convo,
        { msg: query, isUser: true },
        { isUser: false, isPending: true },
      ]
    })
    setIsPending(true)
    const { answer } = await getAnswer({ isSearchMode, query })
    setConversation((convo) => {
      convo.splice(-1, 1, {
        msg: answer,
        isUser: false,
      })
      return convo
    })
    setIsPending(false)
  }

  return (
    <Stack
      gap={16}
      justify="space-between"
      align="center"
      h={"calc(100vh - 80px)"}
      py={16}
      px={"18%"}
    >
      {conversation.length > 0 && <BubbleStack conversation={conversation} />}
      <Field
        onMessageSend={onMessageSend}
        newChat={conversation.length < 1}
        isSearchMode={isSearchMode}
        setIsSearchMode={setIsSearchMode}
        isPending={isPending}
      />
    </Stack>
  )
}

export default Chat
