// eslint-disable-next-line no-unused-vars
import React from "react"

import { Select } from "@mantine/core"

function SingleSelect({
  placeholder,
  value,
  data,
  onChange,
  leftSection = null,
}) {
  return (
    <Select
      placeholder={placeholder}
      value={value}
      data={data}
      onChange={onChange}
      leftSection={leftSection}
      size="md"
      comboboxProps={{
        position: "bottom",
        middlewares: { flip: false, shift: false },
        offset: 0,
        shadow: "lg",
      }}
    />
  )
}

export default SingleSelect
