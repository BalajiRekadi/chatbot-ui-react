import React, { useState } from "react"
import { useNavigate } from "react-router"
import {
  AppShell,
  Flex,
  ActionIcon,
  Text,
  Popover,
  Button,
  useMantineTheme,
} from "@mantine/core"
import {
  IconArrowBarRight,
  IconMenu2,
  IconUserFilled,
} from "@tabler/icons-react"
import NavBar from "./NavBar"
import "./app-layout.css"
import Home from "../../../features/home/components/Home"

function AppLayout() {
  const [closed, setOpened] = useState(false)
  const navigate = useNavigate()
  const theme = useMantineTheme()

  const handleLogout = () => {
    localStorage.clear()
    navigate("/")
  }

  return (
    <AppShell
      className="app-layout"
      header={{ height: 64 }}
      navbar={{
        width: 320,
        breakpoint: "sm",
        collapsed: { desktop: closed },
      }}
      h={"100%"}
    >
      <AppShell.Header>
        <Flex>
          <Flex px="md" w={320} h={64} gap={16} align={"center"}>
            {closed && (
              <ActionIcon
                onClick={() => setOpened(!closed)}
                variant="transparent"
                color="var(--primary)"
              >
                <IconArrowBarRight
                  style={{ width: "32px", height: "32px" }}
                  color="#ddd"
                  stroke={2}
                />
              </ActionIcon>
            )}
            {!closed && (
              <ActionIcon
                onClick={() => setOpened(!closed)}
                variant="transparent"
                color="var(--primary)"
              >
                <IconMenu2
                  stroke={2}
                  color="#ddd"
                  style={{ width: "32px", height: "32px" }}
                />
              </ActionIcon>
            )}
            {/* <Image src={headerLogo} w={"200"} h={"36"} alt="Header Logo" /> */}
            <Flex gap={0}>
              <Text size="md" fw={700}>
                Proven
              </Text>
              <Text size="md" fw={700} c={"var(--secondary)"}>
                Tech
              </Text>
            </Flex>
          </Flex>
          <Flex
            justify={"space-between"}
            flex={1}
            h={64}
            align={"center"}
            ml={16}
          >
            <Text pr={32} size="md" fw={600}>
              PharmaGPT
            </Text>
            <Popover width={200} position="bottom" withArrow shadow="lg">
              <Popover.Target>
                <ActionIcon variant="transparent" size={48} mr={32}>
                  <IconUserFilled
                    color={theme.colors.yellow[5]}
                    size={32}
                    stroke={2}
                  />
                </ActionIcon>
              </Popover.Target>
              <Popover.Dropdown>
                <Button variant="filled" onClick={handleLogout} fullWidth>
                  Logout
                </Button>
              </Popover.Dropdown>
            </Popover>
          </Flex>
        </Flex>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <NavBar />
      </AppShell.Navbar>
      <AppShell.Main bg={"var(--background)"}>
        <Home />
      </AppShell.Main>
    </AppShell>
  )
}

export default AppLayout
