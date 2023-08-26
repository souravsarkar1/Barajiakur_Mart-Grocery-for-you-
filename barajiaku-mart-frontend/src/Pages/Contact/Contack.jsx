import React, { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Textarea,
  Tooltip,
  useClipboard,
  useToast,
  VStack,
} from '@chakra-ui/react';
import { MdEmail, MdOutlineEmail } from 'react-icons/md';
import axios from 'axios';
import ButtonLoader from '../../Loader/ButtonLoader';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const { hasCopied, onCopy } = useClipboard('your@email.com');
  const toast = useToast();
  const [lader, setLoader] = useState(false);
  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Data:', formData);

    setLoader(true);
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Message!",
        description: "Please Fill All The Required Field",
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: "top"
      })
      setLoader(false)
    }
    else {
      axios.post(`https://barajiakurmartbe.onrender.com/message/add`, formData).then((res) => {
        toast({
          title: "Message!",
          description: res.data.msg,
          status: 'success',
          duration: 5000,
          isClosable: true,
          position: "top"
        })
      }).catch((err) => {
        toast({
          title: "Message!",
          description: "Somethig went to wrong " + err.message,
          status: 'error',
          duration: 5000,
          isClosable: true,
          position: "top"
        })

      }).finally((res) => {
        setLoader(false);
        setFormData({
          name: '',
          email: '',
          message: '',
        })
      })
    }

  };

  return (
    <Flex align="center" justify="center" minH="80vh">
      <VStack spacing={8} w="full" maxW="lg">
        <Heading fontSize={{ base: '3xl', md: '4xl' }}>Contact Us</Heading>
        <Box as="form" w="full" onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <FormControl id="name">
              <FormLabel>Your Name</FormLabel>
              <Input
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Your Email</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <MdOutlineEmail />
                </InputLeftElement>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </InputGroup>
            </FormControl>
            <FormControl id="message">
              <FormLabel>Your Message</FormLabel>
              <Textarea
                rows={4}
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleInputChange}
              />
            </FormControl>
            <Button colorScheme="blue" type="submit">
              {lader ? <ButtonLoader height={"40px"} width={"40px"} /> : "Send Message!"}
            </Button>
          </Stack>
        </Box>
        <Tooltip label={hasCopied ? 'Copied!' : 'Copy Email'}>
          <IconButton
            aria-label="Copy Email"
            icon={<MdEmail />}
            variant="outline"
            onClick={onCopy}
          />
        </Tooltip>
      </VStack>
    </Flex>
  );
};

export default ContactPage;
