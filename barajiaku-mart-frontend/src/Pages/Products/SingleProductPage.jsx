'use client'

import {
    Box,
    Container,
    Stack,
    Text,
    Flex,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    List,
    ListItem,
    Center,
    useToast,
} from '@chakra-ui/react'
import { useEffect } from 'react';
import { MdLocalShipping } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getData } from '../../Redux/Data/action';
import ProductLoader from '../../Loader/ProductLoader';
import ReactImageMagnify from 'react-image-magnify';
import { useState } from 'react';
import axios from 'axios';
import ButtonLoader from '../../Loader/ButtonLoader';

export default function Simple() {
    const { id } = useParams();
    const data = useSelector(state => state.dataReducer.data);
    const getDataisLoading = useSelector(state => state.dataReducer.getDataisLoading);
    const token = useSelector(st => st.authReducer.token);
    const [loader, setLoader] = useState(false);
    const navgate = useNavigate();
    const toast = useToast();


    const dispatch = useDispatch();

    // Fetch data when the component mounts
    useEffect(() => {
        // Dispatch the action to get data using the token
        dispatch(getData());
    }, [dispatch]);



    const myData = data.find(el => el._id === id);
    const addToCart = () => {
        setLoader(true)
        if (token) {
            const { img1, img2, rating, title, desc, price, stock, _id } = myData;
            console.log(myData);
            axios.post(`https://barajiakurmartbe.onrender.com/cart/add`, { img1, img2, rating, title, desc, price, stock,ID : _id }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((res) => {
                console.log(res.data);
                toast({
                    title: res.data.msg === "Product is aleady in cart" ? "Already In Cart" : "Added",
                    description: res.data.msg,
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                    position: "top"
                })
            }).catch((err) => {
                console.log(err.message);
                toast({
                    title: 'Add To Cart Fail',
                    description: "Something Went To Wrong!",
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                    position: "top"
                })
            }).finally((res) => {
                setLoader(false);
            })
        } else {
            navgate('/login')
        }
    }
    if (getDataisLoading) {
        return (
            <Center margin={{ base: 'auto', md: '200px auto 0px auto' }}>
                <ProductLoader />
            </Center>
        );
    }
    return (
        <Container maxW={'7xl'}>
            <Flex>
                <SimpleGrid
                    columns={{ base: 1, lg: 2 }}
                    spacing={{ base: 8, md: 10 }}
                    py={{ base: 18, md: 24 }}>
                    <Flex>
                        <ReactImageMagnify
                            {...{
                                smallImage: {
                                    alt: 'product image',
                                    isFluidWidth: true,
                                    src: myData.img1,
                                },
                                largeImage: {
                                    src: myData.img1,
                                    width: 1200,
                                    height: 1800,
                                },
                                lensStyle: { backgroundColor: 'rgba(0,0,0,.6)' },
                            }}
                        />
                    </Flex>
                    <Stack spacing={{ base: 6, md: 10 }}>
                        <Box as={'header'}>
                            <Heading
                                lineHeight={1.1}
                                fontWeight={600}
                                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                                {myData.title}
                            </Heading>
                            <Text
                                color={('gray.900', 'gray.400')}
                                fontWeight={300}
                                fontSize={'2xl'}>
                                ${myData.price} USD
                            </Text>
                        </Box>

                        <Stack
                            spacing={{ base: 4, sm: 6 }}
                            direction={'column'}
                            divider={
                                <StackDivider borderColor={('gray.200', 'gray.600')} />
                            }>

                            <Box>
                                <Text
                                    fontSize={{ base: '16px', lg: '18px' }}
                                    color={('yellow.500', 'yellow.300')}
                                    fontWeight={'500'}
                                    textTransform={'uppercase'}
                                    mb={'4'}>
                                    Product Details
                                </Text>

                                <List spacing={2}>
                                    <ListItem>
                                        <Text as={'span'} fontWeight={'bold'}>
                                            {myData.desc}
                                        </Text>{' '}
                                    </ListItem>
                                    <ListItem>
                                        <Text as={'span'} fontWeight={'bold'}>
                                            Rating:
                                        </Text>{' '}
                                        {myData.rating}
                                    </ListItem>
                                    <ListItem>
                                        <Text as={'span'} fontWeight={'bold'}>
                                            Available:{' '}
                                        </Text>
                                        {myData.rating ? "Insotck" : "Out of Stock"}
                                    </ListItem>
                                </List>
                            </Box>
                        </Stack>

                        <Button
                            rounded={'none'}
                            w={'full'}
                            mt={8}
                            size={'lg'}
                            py={'7'}
                            bg={"black"}
                            color={'white'}
                            textTransform={'uppercase'}
                            _hover={{
                                transform: 'translateY(2px)',
                                boxShadow: 'lg',
                            }}
                            onClick={addToCart}
                        >
                            {loader ? <ButtonLoader width={"40px"} height={"40px"} /> : "Add to cart"}
                        </Button>

                        <Stack direction="row" alignItems="center" justifyContent={'center'}>
                            <MdLocalShipping />
                            <Text>2-3 business days delivery</Text>
                        </Stack>
                    </Stack>
                </SimpleGrid>
            </Flex>
        </Container>
    )
}