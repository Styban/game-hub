import {
  InputGroup,
  Input,
  InputRightElement,
  Button,
  CardBody,
  Card,
  FormLabel,
  FormControl,
  Heading,
  CardHeader,
  Center,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import { Form, useNavigate } from "react-router-dom";
import useUserQueryStore from "../userstore";

const Login = () => {
  const setUser = useUserQueryStore((s) => s.setUser);
  const setPassword = useUserQueryStore((s) => s.setPassword);

  const { register, handleSubmit } = useForm();
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const navigate = useNavigate();

  const onSubmit = (data: FieldValues) => {
    const { user, password } = data;

    setUser(user);
    setPassword(password);

    navigate("/sellercenter");
  };

  return (
    <Center>
      <Card maxW="md" variant={"elevated"}>
        <CardHeader textAlign={"center"} mb="-5">
          <Heading as={"h1"}>Login</Heading>
        </CardHeader>

        <CardBody>
          <Form onSubmit={handleSubmit(onSubmit)} method="post">
            <FormControl mb={6}>
              <FormLabel>User</FormLabel>
              <Input
                {...register("user")}
                placeholder="Enter Username of Email"
              />
            </FormControl>

            <FormControl mb={6}>
              <FormLabel>Password</FormLabel>
              <InputGroup size="md">
                <Input
                  {...register("password")}
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  placeholder="Enter password"
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <Box textAlign={"center"}>
              <Button type="submit">Login</Button>
            </Box>
          </Form>
        </CardBody>
      </Card>
    </Center>
  );
};

export default Login;
