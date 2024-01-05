import {
  InputGroup,
  Input,
  Button,
  CardBody,
  Card,
  FormLabel,
  FormControl,
  Heading,
  CardHeader,
  Center,
  Box,
  FormHelperText,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { Form, Link, useNavigate } from "react-router-dom";
import backGround from "../assets/gameHub.jpg";

const Register = () => {
  const navigate = useNavigate();

  return (
    <Box
      backgroundImage={backGround}
      backgroundSize="cover"
      backgroundPosition="top"
      minHeight="100vh"
    >
      <Center>
        <Box>
          <Card
            marginTop={"30%"}
            background={"black"}
            shadow="0px -4px 6px 5px rgba(255, 255, 255, 0.1)"
            border={"1px solid white"}
            width={"400px"}
            size={"lg"}
          >
            <CardHeader textAlign={"center"} mb="-5">
              <Heading as={"h1"}>Register</Heading>
            </CardHeader>

            <CardBody>
              <Form onSubmit={() => navigate("/")} method="post">
                <FormControl mb={8} id="user">
                  <FormLabel fontWeight={"bold"}>User name</FormLabel>
                  <Input
                    placeholder="Enter Username"
                    border={"1px"}
                    type="text"
                  />
                </FormControl>

                <FormControl mb={8} id="user">
                  <FormLabel fontWeight={"bold"}>Email</FormLabel>
                  <Input
                    placeholder="Enter Username"
                    border={"1px"}
                    type="text"
                  />
                </FormControl>

                <FormControl mb={8} id="password">
                  <FormLabel>Password</FormLabel>
                  <InputGroup size="md">
                    <Input
                      pr="4.5rem"
                      type={"password"}
                      placeholder="Enter password"
                      border={"1px"}
                    />
                  </InputGroup>
                </FormControl>

                <FormControl mb={8} id="password">
                  <FormLabel>Confirm Password</FormLabel>
                  <InputGroup size="md">
                    <Input
                      pr="4.5rem"
                      type={"password"}
                      placeholder="Enter password"
                      border={"1px"}
                    />
                  </InputGroup>
                </FormControl>

                <Box textAlign={"center"}>
                  <Link to="/">
                    <Button style={{ width: "100%" }}>Register</Button>
                  </Link>
                </Box>
              </Form>

              <Box textAlign={"center"} mt={8}>
                <Link to="/">
                  <Button
                    variant={"link"}
                    fontSize={"small"}
                    fontWeight={"light"}
                  >
                    Login
                  </Button>
                </Link>
              </Box>
            </CardBody>
          </Card>
        </Box>
      </Center>
    </Box>
  );
};

export default Register;
