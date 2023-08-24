import React from 'react';
import { ChakraProvider, Box, Heading, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom'; // If you're using React Router for navigation


function ErrorPage({event}) {
  console.log(event);
  return (
    <ChakraProvider>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Box
          p={8}
          bg="white"
          rounded="lg"
          maxWidth="400px"
          width="100%"
          textAlign="center"
        >
          <Heading mb={4} size="lg">
            Oops! Something went wrong.
          </Heading>
          <p>An error occurred while trying to load the page.</p>
          <Button
            as={Link} // Use Link component for navigation
            to="/"    // Replace with the appropriate route
            colorScheme="teal"
            mt={4}
            w="100%"
            onClick={event}
          >
            Go back to Home
          </Button>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default ErrorPage;
