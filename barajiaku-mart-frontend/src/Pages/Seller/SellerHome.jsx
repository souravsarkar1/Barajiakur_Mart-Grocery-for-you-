import {  Text, Button, Flex, Image, Box, VStack } from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { sellerLogout } from '../../Redux/SellerAuthentication/action';

const SellerHome = () => {
  const isAuth = useSelector(st=>st.sellerAuthReducer.isAuth);
  const dispatch = useDispatch();
  const handleLogoutButton =()=>{
    dispatch(sellerLogout());
  }
  return (
    <Flex direction="column" align="center" p={8}>
      <Text mt={4}>Welcome to the seller dashboard. You can manage your products here.</Text>
      <br />
      {isAuth ? <Button colorScheme='red' onClick={handleLogoutButton}>Logout</Button> :<Button colorScheme="blue"><Link  style={{
        textDecoration: 'none',     // Remove underline
        color: 'inherit',          // Prevent default color change on hover
      }} to={'/seller/login'}>Login As Seller</Link></Button>}
      <Flex mt={8} justify="center" wrap="wrap">
        <Box m={2}>
          <Image w={"400px"} h={'200px'} src="https://i0.wp.com/profitbooks.net/wp-content/uploads/2019/09/selling-things-online.jpg?ssl=1" alt="Random Image 1" />
        </Box>
        <Box m={2}>
          <Image w={"400px"} h={'200px'} src="https://blog.sellfy.com/wp-content/uploads/2020/06/How-to-sell-online-and-make-money-in-2020.png" alt="Random Image 2" />
        </Box>
        {/* Add more images as needed */}
      </Flex>

      <VStack mt={8} spacing={4}>
        <Button colorScheme="blue"><Link to={'/adddata'}  style={{
          textDecoration: 'none',     // Remove underline
          color: 'inherit',          // Prevent default color change on hover
        }}>Add Product</Link></Button>
        <Button colorScheme="green"><Link to={'/myproducts'}  style={{
          textDecoration: 'none',     // Remove underline
          color: 'inherit',          // Prevent default color change on hover
        }}>View Products</Link></Button>
      </VStack>
    </Flex>
  );
};

export default SellerHome;
