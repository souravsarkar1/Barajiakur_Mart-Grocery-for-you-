import React from 'react';
import {
  Box,
  Container,
  Grid,
  GridItem,
  Image,
  Text,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';

const products = [
  { img: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=180/app/images/products/sliding_image/481927a.jpg', title: 'Testy Nuts', price: '$19.99' },
  { img: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=180/app/images/products/sliding_image/446966a.jpg?ts=1688634170', title: 'Chana', price: '$29.99' },
  { img: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=180/app/images/products/sliding_image/160a.jpg?ts=1689327537', title: 'Amul Batter', price: '$39.99' },
  { img: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=180/app/images/products/sliding_image/19512a.jpg?ts=16908134140', title: 'Amul Milk', price: '$49.99' },
  { img: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=180/app/images/products/sliding_image/446966a.jpg?ts=1688634170', title: 'Chana', price: '$59.99' },
  { img: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=180/app/images/products/sliding_image/481927a.jpg', title: 'Chips', price: '$69.99' },
];

const Home3 = () => {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')} py={10}>
      <Container maxW="6xl">
        <Heading mb={8}>Featured Products</Heading>
        <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={6}>
          {products.map((product, index) => (
            <GridItem key={index}>
              <Box
                p={4}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="md"
                bg="white"
                _hover={{ boxShadow: 'lg' }}
              >
                <Image src={product.img} alt={product.title} maxH="200px" objectFit="cover" />
                <Box p={2}>
                  <Heading fontSize="md" mb={2}>
                    {product.title}
                  </Heading>
                  <Text fontWeight="bold">{product.price}</Text>
                </Box>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home3;
