import { Box, Heading, Text } from "@chakra-ui/react";
import { useRouteError } from "react-router-dom";
import NavBar from "../components/nav_bar";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading>Oops</Heading>
        <Text>
          {error ? "This page does not exist." : "An unexpected error occured."}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
