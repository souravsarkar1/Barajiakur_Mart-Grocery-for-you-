import { Heading, Text, Button, Flex, Image, Box, VStack } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const SellerHome = () => {
  return (
    <Flex direction="column" align="center" p={8}>
      <Heading>Seller Page</Heading>
      <Text mt={4}>Welcome to the seller dashboard. You can manage your products here.</Text>

      <Flex mt={8} justify="center" wrap="wrap">
        <Box m={2}>
          <Image src="https://via.placeholder.com/150" alt="Random Image 1" />
        </Box>
        <Box m={2}>
          <Image src="https://via.placeholder.com/150" alt="Random Image 2" />
        </Box>
        {/* Add more images as needed */}
      </Flex>

      <VStack mt={8} spacing={4}>
        <Button colorScheme="blue"><Link to={'/adddata'}>Add Product</Link></Button>
        <Button colorScheme="green"><Link to={'/myproducts'}>View Products</Link></Button>
      </VStack>
    </Flex>
  );
};

export default SellerHome;
