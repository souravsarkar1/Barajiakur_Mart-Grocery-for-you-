import React from 'react';
import {
  Box,
  Flex,
  Image,
  Text,
  Badge,
  Spacer,
} from '@chakra-ui/react';

function ProductCard({ img1, rating, title, desc, price, stock }) {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      transition="transform 0.2s, box-shadow 0.2s"
      _hover={{
        transform: 'scale(1.02)',
        boxShadow: 'md',
      }}
    >
      <Image src={`data:image/jpeg;base64,${img1}`} alt="Product" />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge>
          <Spacer />
          <Badge>Rating: {rating}</Badge>
        </Box>

        <Text mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
          {title}
        </Text>

        <Text>{desc}</Text>

        <Flex mt="2" alignItems="center">
          <Text fontWeight="bold" color="gray.600">
            ${price}
          </Text>
          <Spacer />
          {stock ? (
            <Badge colorScheme="green">In Stock</Badge>
          ) : (
            <Badge colorScheme="red">Out of Stock</Badge>
          )}
        </Flex>
      </Box>
    </Box>
  );
}

export default ProductCard;
