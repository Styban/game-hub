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
  Divider,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { Form } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const onSubmit = (data: FieldValues) => console.log(data);  

  return (
    <Center>
      <Card maxW="md" variant={"elevated"}>
        <CardHeader textAlign={"center"} mb="-5">
          <Heading as={"h1"}>Login</Heading>
        </CardHeader>
        <CardBody>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormControl mb={6}>
              <FormLabel>Email</FormLabel>
              <Input {...register("email")} placeholder="Enter Email" />
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
