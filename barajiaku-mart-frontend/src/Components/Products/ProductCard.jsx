import React, { useState } from 'react';
import {
  Box,
  Flex,
  Image,
  Text,
  Badge,
  Spacer,
  Button,
  Grid,
  useToast
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import ButtonLoader from '../../Loader/ButtonLoader';

function ProductCard({ img1, img2, rating, title, desc, price, stock,_id }) {
  const [isHovered, setIsHovered] = useState(false);
  const token = useSelector(st=>st.authReducer.token);
  const [loader,setLoader] = useState(false);
  const navgate = useNavigate();
  const toast = useToast();
const addToCart = ()=>{
  setLoader(true)
 if (token) {
  axios.post(`https://barajiakurmartbe.onrender.com/cart/add`,{img1,img2,rating,title,desc,price,stock,ID : _id},{
    headers : {
      Authorization : `Bearer ${token}`
    }
  }).then((res)=>{
    console.log(res.data);
    toast({
      title: "Added",
      description: res.data.msg,
      status: 'success',
      duration: 5000,
      isClosable: true,
      position : "top"
    })
  }).catch((err)=>{
    console.log(err.message);
    toast({
      title: 'Add To Cart Fail',
      description: "Something Went To Wrong!",
      status: 'error',
      duration: 5000,
      isClosable: true,
      position: "top"
    })
  }).finally((res)=>{
    setLoader(false);
  })
 }else{
  navgate('/login')
 }
}
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      p={"5px"}
      overflow="hidden"
      transition="transform 0.2s, box-shadow 0.2s"
      _hover={{
        transform: 'scale(1.02)',
        boxShadow: 'md',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      

      {isHovered ? <Image src={img1} alt="Product Image 2" w={'300px'} h={'200px'}/> : <Image src={img2} alt="Product" w={'300px'} h={'200px'} />
      }

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
      <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={4}>
      <Button colorScheme={'pink'}><Link to={`/product/${_id}`}>See More!</Link></Button>
      <Button colorScheme='blue' onClick={addToCart}>{loader ? <ButtonLoader height={"40px"} width={"40px"}/> : "Add To Cart"}</Button>
      </Grid>
    </Box>
  );
}

export default ProductCard;
