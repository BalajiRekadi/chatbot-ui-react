// eslint-disable-next-line no-unused-vars
import React from "react"
import Microscope from "../../../assets/microscope.png"

import { Flex, Stack, Image, Title, Text } from "@mantine/core"
import { Outlet } from "react-router"

function AuthLayout() {
  return (
    <Flex h={"100vh"} w={"100vw"}>
      <Outlet />
      <Stack w={"53vw"} bg={"#011E5E"} px={"8vw"} align="center">
        <Image src={Microscope} alt="Microscope" p={80} w={700} />
        <Title order={1} c={"white"} ta={"center"} px={30}>
          The perfect Healthcare Management tool for your Hospital
        </Title>
        <Text size={"sm"} c={"white"} ta={"center"}>
          Proven Tech Firm simplifies the tracking of all hospital management
          activities, ensuring seamless monitoring and prevention with
          tech-enabled care
        </Text>
      </Stack>
    </Flex>
  )
}

export default AuthLayout
