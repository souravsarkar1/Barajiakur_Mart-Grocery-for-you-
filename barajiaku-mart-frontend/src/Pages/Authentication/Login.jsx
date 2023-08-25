import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Heading,
  Center,
  useToast,
  Text,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../Redux/Authencation/action';
import ButtonLoader from '../../Loader/ButtonLoader';
import { Link, useLocation, useNavigate } from 'react-router-dom';


function Login() {
  const [formData, setFormData] = useState({
    email: '',
    pass: '',
  });
  const dispatch = useDispatch();
  const loginisLoading = useSelector(st => st.authReducer.loginisLoading);
  const isError = useSelector(st => st.authReducer.loginisError);

  const navigate = useNavigate();
  const toast = useToast();
  const location = useLocation();
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  console.log(isError);
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    //console.log('Form data:', formData);
    const loginResponse = await dispatch(login(formData, toast));
    if (loginResponse && !isError) {
      navigate(location.state);
    }
  };
  if (isError) {
    navigate('/error')
  }
  return (
    <Center height="100vh">
      <Box p={6} width="300px" textAlign="center">
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
          <Heading as="h2" size="lg" mb={4}>
            Login
          </Heading>
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  name="pass"
                  value={formData.pass}
                  onChange={handleInputChange}
                  required
                />
              </FormControl>
              <Button type="submit" colorScheme="teal" mt={4} w="100%">
                {loginisLoading ? <ButtonLoader height={"40px"} width={"40px"} /> : " Log In"}
              </Button>
            </Stack>
          </form>
          <Box mt={4}>
            <span role="img" aria-label="smile">
              😀
            </span>{' '}
            Welcome back!{' '}
            <span role="img" aria-label="wave">
              👋
            </span>
          </Box>
          <Text mt={4} textAlign="center">
            😃 {`Don't have an account?`}{' '}
            <Text as="span" color="teal.500">
              <Link to={'/signup'}>Create a new Account</Link>
            </Text>
          </Text>
        </motion.div>
      </Box>
    </Center>
  );
}

export default Login;
