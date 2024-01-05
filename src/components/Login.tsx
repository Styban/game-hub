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
  FormHelperText,
} from "@chakra-ui/react";
import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import { Form, Link, useNavigate } from "react-router-dom";
import backGround from "../assets/gameHub.jpg";
import useGameQueryStore from "../store";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const setLoggedUser = useGameQueryStore((s) => s.setLoggedUser);
  const setLoggedUserPassword = useGameQueryStore(
    (s) => s.setLoggedUserPassword
  );

  const navigate = useNavigate();

  const onSubmit = (data: FieldValues) => {
    const { user, password } = data;

    setLoggedUser(user);
    setLoggedUserPassword(password);

    navigate("auth");
  };

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
              <Heading as={"h1"}>Login</Heading>
            </CardHeader>

            <CardBody>
              <Form onSubmit={handleSubmit(onSubmit)} method="post">
                <FormControl mb={8} id="user">
                  <FormLabel fontWeight={"bold"}>User</FormLabel>
                  <Input
                    {...register("user")}
                    placeholder="Enter Username"
                    border={"1px"}
                    type="text"
                  />
                </FormControl>

                <FormControl mb={8} id="password">
                  <FormLabel>Password</FormLabel>
                  <InputGroup size="md">
                    <Input
                      {...register("password")}
                      pr="4.5rem"
                      type={show ? "text" : "password"}
                      placeholder="Enter password"
                      border={"1px"}
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <FormHelperText as={"u"}>forgot password?</FormHelperText>
                </FormControl>

                <Box textAlign={"center"}>
                  <Button type="submit" style={{ width: "100%" }}>
                    Login
                  </Button>
                </Box>
              </Form>

              <Box textAlign={"center"} mt={8}>
                <Link to="/register">
                  <Button
                    variant={"link"}
                    fontSize={"small"}
                    fontWeight={"light"}
                  >
                    Register
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

export default Login;
