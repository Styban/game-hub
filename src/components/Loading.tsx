import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Card,
  CardBody,
  CardHeader,
  Center,
  Heading,
  Spinner,
} from "@chakra-ui/react";
import backGround from "../assets/gameHub.jpg";
import { useNavigate } from "react-router-dom";
import useLog from "../hooks/useLog";
import useGameQueryStore from "../store";
import { useEffect, useState } from "react";

const Loading = () => {
  const { user, key } = useGameQueryStore((s) => s.gameQuery);
  const setUserID = useGameQueryStore((s) => s.setSelectedUserId);

  const user_name = user ? user : "";
  const pass = key ? key : "";

  const { data: results } = useLog(user_name, pass);

  const navigate = useNavigate();

  useEffect(() => {
    const delay = 2000;

    setTimeout(() => {
      if (results && results?.length > 0) {
        setUserID(results[0].id);

        const User = results[0].user_name;
        User === "admin" ? navigate("/admin") : navigate("/user/" + User);
      } else {
        console.log(results);

        console.log("invalid input");
        navigate("/");
      }
    }, delay);
  }, [results]);

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
            shadow="0px -4px 6px 5px rgba(56, 161, 105, 0.1)"
            border={"1px solid #38A169"}
            width={"400px"}
            size={"lg"}
            align={"center"}
          >
            <CardHeader textAlign={"center"} mb="-5">
              <Heading as={"h1"} color={"green.500"}>
                Loading...
              </Heading>
            </CardHeader>
            <CardBody>
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="green.500"
                size="xl"
              />
            </CardBody>
          </Card>
        </Box>
      </Center>
    </Box>
  );
};

export default Loading;
