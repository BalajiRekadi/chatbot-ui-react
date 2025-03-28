// eslint-disable-next-line no-unused-vars
import React, { useState } from "react"

import { MultiSelect } from "@mantine/core"
import "./multiselectall.css"

function MultiSelectAll({
  label = "",
  placeholder,
  value,
  data = [],
  onChange,
  leftSection,
}) {
  const options = ["All", ...data]

  const onSelect = (e) => {
    if (e[e.length - 1] === "All") {
      onChange(["All"])
    } else {
      onChange(e.filter((i) => i !== "All"))
    }
  }

  return (
    <MultiSelect
      flex={1}
      label={label}
      placeholder={placeholder}
      value={value}
      data={options}
      onChange={onSelect}
      leftSection={leftSection}
      comboboxProps={{
        position: "bottom",
        middlewares: { flip: false, shift: false },
        offset: 0,
        shadow: "lg",
      }}
      searchable
      clearable
      size="md"
    />
  )
}

export default MultiSelectAll
