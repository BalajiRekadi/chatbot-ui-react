// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from "react"

import { ScrollArea, Stack } from "@mantine/core"
import Bubble from "./Bubble"

function BubbleStack({ conversation = [] }) {
  const viewport = useRef(null)

  useEffect(() => {
    scrollToBottom()
  }, [conversation])

  const scrollToBottom = () =>
    viewport.current?.scrollTo({
      top: viewport.current?.scrollHeight,
      behavior: "smooth",
    })

  return (
    <ScrollArea
      w={"100%"}
      type="scroll"
      offsetScrollbars
      scrollbarSize={8}
      pr={8}
      viewportRef={viewport}
    >
      <Stack>
        {conversation.map((bubble) => (
          <Bubble key={bubble.timestamp} data={bubble} />
        ))}
      </Stack>
    </ScrollArea>
  )
}

export default BubbleStack
