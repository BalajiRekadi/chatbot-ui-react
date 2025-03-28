// eslint-disable-next-line no-unused-vars
import React from "react"

import { Badge, Box, Flex, Text, useMantineTheme } from "@mantine/core"

function BadgeGroup({ label = "", badges = [], size = "md" }) {
  const theme = useMantineTheme()
  return (
    <Box>
      {label && (
        <Text c={"dimmed"} size="xs" fw={500} pb={8}>
          {label}
        </Text>
      )}
      <Flex gap={8} wrap={"wrap"}>
        {badges.map((badge) => (
          <Badge
            key={badge}
            color={theme.colors.gray[3]}
            autoContrast
            fw={500}
            size={size}
          >
            {badge}
          </Badge>
        ))}
      </Flex>
    </Box>
  )
}

export default BadgeGroup
