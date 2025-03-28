// eslint-disable-next-line no-unused-vars
import React from "react"

import { Badge, Card, Center, Flex, Group, Skeleton, Text } from "@mantine/core"

function CardContainer({
  isFetching,
  label,
  badge = "",
  children,
  withBorder = false,
  shadow = "xs",
  hasData = true,
}) {
  return (
    <Card
      shadow={shadow}
      radius="md"
      px={16}
      mb={16}
      withBorder={withBorder}
      flex={1}
    >
      {isFetching && (
        <>
          <Skeleton height={50} circle mb="xl" />
          <Skeleton height={32} radius="xl" />
          <Skeleton height={32} mt={16} radius="xl" />
          <Skeleton height={32} mt={16} radius="xl" />
        </>
      )}
      {!isFetching && (
        <Group justify="flex-start" align="center" pb={"20px"}>
          <Text fw={700} size="lg">
            {label}
          </Text>
          {badge && (
            <>
              <Badge size="lg" variant="light">
                <Flex align={"center"}>
                  <Text size="10" fw={700} pr={10}>
                    Total
                  </Text>
                  {badge}
                </Flex>
              </Badge>
            </>
          )}
        </Group>
      )}
      {!isFetching && hasData && children}
      {!hasData && !isFetching && (
        <Center h={320}>
          <Text fw={700} c={"dimmed"} size="24px">
            No Data Found
          </Text>
        </Center>
      )}
    </Card>
  )
}

export default CardContainer
