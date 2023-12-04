import { Center, Heading, Text, VStack } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <Center>
        <VStack>
          <Heading as="h1">Oops...</Heading>
          <Text>
            {isRouteErrorResponse(error)
              ? "Invalid Page"
              : "Sorry, an unexpected error has occurred."}
          </Text>
        </VStack>
      </Center>
    </>
  );
};

export default ErrorPage;
