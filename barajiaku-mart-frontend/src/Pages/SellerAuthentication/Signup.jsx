import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Grid,
  useToast,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import ButtonLoader from '../../Loader/ButtonLoader';
import { Link, useNavigate } from 'react-router-dom';
import ErrorPage from '../../ErrorHandeling/ErrorHandeling';
import { sellerSignup, sellerSignupErrorHandeling } from '../../Redux/SellerAuthentication/action';
//import { useRef } from 'react';
//import axios from 'axios';

function SellerSignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    pass: '',
    age: '',
    city: '',
    photo: null,
  });
  const toast = useToast();
  const dispatch = useDispatch();
  const signupisLoading = useSelector(st => st.sellerAuthReducer.signupisLoading);
  const isError = useSelector(st => st.sellerAuthReducer.signupisError);
  const navigate = useNavigate();
  //const ref = useRef(null);
  //console.log(isLoading);

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);

  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can add form submission logic here
    const handleErrorEvent = () => {
      dispatch(sellerSignupErrorHandeling());
    }
    console.log('Form data:', formData);
    console.log(validatePassword(formData.pass));
    if (validatePassword(formData.pass)) {
      toast({
        title: 'From fail',
        description: "Password should be at least 8 characters long, contain at least one uppercase character, one number, and one special character.",
        status: 'error',
        duration: 9000,
        isClosable: true,
        position: "top"
      })

    }
    else if (!formData.name || !formData.email || !formData.pass || !formData.age || !formData.city || !formData.photo) {
      toast({
        title: 'From fail',
        description: "Please All The Required Field",
        status: 'error',
        duration: 9000,
        isClosable: true,
        position: "top"
      })

    }
    else {
      dispatch(sellerSignup(formData, toast)).then((res) => {
        setTimeout(() => {
          if (isError) {
            return <ErrorPage event={handleErrorEvent} />
          }
          else {
            navigate('/login');
          }
        }, 2000);
      })
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePhotoChange = (event) => {
    const photoFile = event.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      photo: photoFile,
    }));
  };



  return (
    <ChakraProvider>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          p={8}
          bg="white"
          rounded="lg"
          maxWidth="400px"
          width="100%"
        >
          <Heading mb={4} size="lg" textAlign="center">
            Sign Up as seller 👍
          </Heading>
          <form onSubmit={handleSubmit}>
            <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={4}>
              <FormControl mb={4}>
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl mb={4}>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl mb={4}>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  name="pass"
                  value={formData.pass}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl mb={4}>
                <FormLabel>Age</FormLabel>
                <Input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl mb={4}>
                <FormLabel>City</FormLabel>
                <Input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl mb={4}>
                <FormLabel>Photo</FormLabel>
                <Input
                  type="file"
                  name="photo"
                  accept="image/*"
                  onChange={handlePhotoChange}
                />
              </FormControl>

            </Grid>
            <Button type="submit" colorScheme="teal" mt={4} w="70%" m={'auto'}>
              {signupisLoading ? <ButtonLoader height={"40px"} width={"40px"} /> : "Sign Up"}
            </Button>
          </form>
          <Text mt={4} textAlign="center">
            😃 Already have an account?{' '}
            <Text as="span" color="teal.500">
              <Link to={'/seller/login'}> Log in here</Link>
            </Text>
          </Text>
        </motion.div>
      </Box>
    </ChakraProvider>
  );
}

export default SellerSignUp;
