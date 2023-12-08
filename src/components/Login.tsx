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
import { Form } from "react-router-dom";

const Login = () => {
  const ref = useRef<HTMLInputElement>(null);
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Center>
      <Card maxW="md" variant={"elevated"}>
        <CardHeader textAlign={"center"} mb="-5">
          <Heading as={"h1"}>Login</Heading>
        </CardHeader>
        <CardBody>
          <Form
            onSubmit={(event) => {
              event.preventDefault();
              if (ref.current) {
                console.log(ref.current.value);
              }
            }}
          >
            <FormControl mb={6}>
              <FormLabel>Email</FormLabel>
              <Input placeholder="Enter Email" />
            </FormControl>

            <FormControl mb={6}>
              <FormLabel>Password</FormLabel>
              <InputGroup size="md">
                <Input
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
