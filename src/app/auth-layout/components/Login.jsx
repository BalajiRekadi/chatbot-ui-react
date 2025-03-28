// eslint-disable-next-line no-unused-vars
import React from "react"
import {
  Stack,
  Image,
  TextInput,
  PasswordInput,
  Checkbox,
  Title,
  Text,
  Anchor,
  Button,
  Group,
  Flex,
} from "@mantine/core"
import ProvenTech from "../../../assets/proventech.png"
import { useForm } from "@mantine/form"
import {
  IconBrandGoogleFilled,
  IconBrandAppleFilled,
} from "@tabler/icons-react"
import { useNavigate } from "react-router"

function Login() {
  const navigate = useNavigate()

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },

    // TODO: uncomment when login api is integrated
    validate: {
      // email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      // password: (value) => (value.length > 0 ? null : "Invalid password"),
    },
  })

  const onLogin = (form) => {
    navigate("/user/overview")
  }

  return (
    <Stack w={"47vw"} px={"8%"} py={"1%"} gap={160}>
      <Image src={ProvenTech} alt="logo" w={150} />
      <Stack gap={16}>
        <Title order={2} pb={24}>
          Login to your Account
        </Title>
        <form onSubmit={form.onSubmit((values) => onLogin(values))}>
          <TextInput
            withAsterisk
            variant="filled"
            placeholder="your@email.com"
            key={form.key("email")}
            size="lg"
            pb={16}
            {...form.getInputProps("email")}
          />
          <PasswordInput
            mt="sm"
            size="lg"
            variant="filled"
            placeholder="Password"
            key={form.key("password")}
            {...form.getInputProps("password")}
          />
          <Flex justify={"space-between"} py={20}>
            <Checkbox
              defaultChecked
              label={<Text size="md">Remember me</Text>}
              radius="xl"
            />
            <Anchor href="/" target="_blank" underline="never">
              Forgot Password?
            </Anchor>
          </Flex>
          <Button type="submit" size="lg" radius="md" mt={16} fullWidth>
            Sign in with email
          </Button>
        </form>
        <Text ta={"center"} c={"gray"} fw={600} p={24}>
          ------- Or login with --------
        </Text>
        <Group justify="center">
          <Button
            leftSection={<IconBrandGoogleFilled size={20} />}
            variant="default"
            size="lg"
            radius="md"
          >
            Google
          </Button>
          <Button
            leftSection={<IconBrandAppleFilled size={20} />}
            variant="default"
            radius="md"
            size="lg"
          >
            Apple
          </Button>
        </Group>
        <Flex py={24}>
          <Text c={"grey"}>{`Don't have an account?`}</Text>
          <Anchor href="/" target="_blank" underline="never" fw={700} px={8}>
            Get started
          </Anchor>
        </Flex>
      </Stack>
    </Stack>
  )
}

export default Login
