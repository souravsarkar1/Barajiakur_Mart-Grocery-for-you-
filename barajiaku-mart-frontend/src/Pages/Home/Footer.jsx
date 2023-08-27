'use client'



import {
  Box,
  Container,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'



const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  )
}

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <Box>
              <Image src='https://drive.google.com/uc?id=1F-JUIJnaaSzXMR3RwvroNaPPO-_oZXeK' alt="Logo" h={"100px"} w={"280px"} />
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Product</ListHeader>
            <Box >
              <Link to={'/'}>
                Overview
              </Link>
            </Box>
            <Box >
              <Link to={'/'}>
                Features
              </Link >
            </Box>
            <Box >
              <Link to={'/'}>
                Tutorials
              </Link>
            </Box>
            <Box >
              <Link to={'/'}>
                Pricing
              </Link>
            </Box>
            <Box >
              <Link to={'/'}>
                Releases
              </Link>
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Box >
              <Link to={'/'}>
              About
              </Link>
            </Box>
            <Box >
              <Link to={'/'}>
              Press
              </Link>
            </Box>
            <Box >
              <Link to={'/'}>
              Careers
              </Link>
            </Box>
            <Box >
              <Link to={'/'}>
              Contact
              </Link>
            </Box>
            <Box >
              <Link to={'/'}>
              Partners
              </Link>
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            <Box >
              <Link to={'/'}>
              Help Center
              </Link>
            </Box>
            <Box >
              <Link to={'/'}>
              Terms of Service
              </Link>
            </Box>
            <Box >
              <Link to={'/'}>
              Legal
              </Link>
            </Box>
            <Box >
              <Link to={'/'}>
              Privacy Policy
              </Link>
            </Box>
            <Box >
              <Link to={'/'}>
              Status
              </Link>
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Follow Us</ListHeader>
            <Box >
              <Link to={'/'}>
              Facebook
              </Link>
            </Box>
            <Box >
              <Link to={'/'}>
              Twitter
              </Link >
            </Box>
            <Box >
              <Link to={'/'}>
              Dribbble
              </Link>
            </Box>
            <Box >
              <Link to={'/'}>
              Instagram
              </Link>
            </Box>
            <Box >
              <Link to={'/'}>
              LinkedIn
              </Link>
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}