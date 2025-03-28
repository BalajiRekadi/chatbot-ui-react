// eslint-disable-next-line no-unused-vars
import React from "react"

import { Modal } from "@mantine/core"
import { Text } from "@mantine/core"

function GenericModal({ title, opened, size = "auto", onClose, children }) {
  return (
    <Modal
      opened={opened}
      onClose={() => onClose(!opened)}
      title={
        <Text size="lg" fw={700}>
          {title}
        </Text>
      }
      size={size}
    >
      {children}
    </Modal>
  )
}

export default GenericModal
