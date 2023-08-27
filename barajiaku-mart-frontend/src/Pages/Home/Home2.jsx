

import {
  Box,
  Heading,
  Text,
  Stack,
  Container,
  Image,
  useColorModeValue,
  Button,
 
  Grid,
  GridItem,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const carddeteals = [
    {img : "https://media.istockphoto.com/id/1303736573/photo/close-up-of-uncooked-chana-dal.jpg?s=612x612&w=0&k=20&c=I6pbpZmmHI_MmIb8VDT3p5Z_WAFa0g6Xxdex6lwYvEk=",title : "Daal"},
    {img : "https://img.freepik.com/free-photo/top-view-raw-rice-inside-plate-dark-desk_179666-27235.jpg?w=2000",title : "Rice"},
    {img : "https://www.seriouseats.com/thmb/kcVRsgt94S0g9N9I2zljZiOt1fQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2016__04__20150402-garam-masala-2879a150647d4403bdc0645e71a2ae0a.jpg",title : "Masala"},
    {img : "https://m.media-amazon.com/images/I/51nf-MK31vL.jpg",title : "Soap"},
    {img : "https://media.istockphoto.com/id/1303736573/photo/close-up-of-uncooked-chana-dal.jpg?s=612x612&w=0&k=20&c=I6pbpZmmHI_MmIb8VDT3p5Z_WAFa0g6Xxdex6lwYvEk=",title : "Daal"},
    {img : "https://img.freepik.com/free-photo/top-view-raw-rice-inside-plate-dark-desk_179666-27235.jpg?w=2000",title : "Rice"},
 //   {img : "https://www.seriouseats.com/thmb/kcVRsgt94S0g9N9I2zljZiOt1fQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2016__04__20150402-garam-masala-2879a150647d4403bdc0645e71a2ae0a.jpg",title : "Masala"},
 
]



export default function Home2() {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')}>
    <Container maxW={'7xl'} py={16}>
   
      <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(6, 1fr)' }} gap={6} m={'auto'}>
        {carddeteals.map((el) => (
          <Link to={'/product'}>
          <GridItem key={el.title}>
            <Box maxW={'270px'} w={'full'} boxShadow={'2xl'} rounded={'md'} overflow={'hidden'} m={'auto'}>
              <Image h={'120px'} w={'full'} src={el.img} objectFit="cover" alt="#" />
              <Box p={6}>
                <Stack spacing={0} align={'center'} mb={5}>
                  <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                    {el.title}
                  </Heading>
                  <Text color={'gray.500'}>{`Lorem ipsum is placeholder text commonly`}</Text>
                </Stack>
                <Button
                  w={'full'}
                  mt={8}
                  bg={'blue.400'}
                  color={'black'}
                  rounded={'md'}
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg',
                  }}
                >
                 See More!
                </Button>
              </Box>
            </Box>
          </GridItem>
          </Link>
        ))}
      </Grid>
     
    </Container>
  </Box>
  )
}