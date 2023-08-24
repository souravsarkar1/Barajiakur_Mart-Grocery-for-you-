import React, { useState } from 'react';
import axios from 'axios';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Center,
  Grid,
  Checkbox,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';

function ProductForm() {
  const [formData, setFormData] = useState({
    title: '',
    desc: '',
    img1: '',
    img2: '',
    price: 0,
    stock: false,
    rating: 0,
  });

  const token = useSelector(state => state.authReducer.token);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        'https://barajiakurmartbe.onrender.com/data/add',
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('Data posted:', response.data);
      // Reset the form after successful submission
      setFormData({
        title: '',
        desc: '',
        img1: '',
        img2: '',
        price: 0,
        stock: false,
        rating: 0,
      });
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  return (
    <Center m="30px auto 0px auto">
      <Box p={4}>
        <form onSubmit={handleSubmit}>
          <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={4}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input type="text" name="title" value={formData.title} onChange={handleInputChange} required />
            </FormControl>
            <FormControl>
              <FormLabel>Description</FormLabel>
              <Input type="text" name="desc" value={formData.desc} onChange={handleInputChange} required />
            </FormControl>
            <FormControl>
              <FormLabel>Image 1 URL</FormLabel>
              <Input type="text" name="img1" value={formData.img1} onChange={handleInputChange} />
            </FormControl>
            <FormControl>
              <FormLabel>Image 2 URL</FormLabel>
              <Input type="text" name="img2" value={formData.img2} onChange={handleInputChange} />
            </FormControl>
            <FormControl>
              <FormLabel>Price</FormLabel>
              <Input type="number" name="price" value={formData.price} onChange={handleInputChange} required />
            </FormControl>
            <FormControl>
              <FormLabel>Stock</FormLabel>
              <Checkbox name="stock" isChecked={formData.stock} onChange={handleCheckboxChange}>
                In Stock
              </Checkbox>
            </FormControl>
            <FormControl>
              <FormLabel>Rating</FormLabel>
              <Input type="number" name="rating" value={formData.rating} onChange={handleInputChange} required />
            </FormControl>
          </Grid>
          <Button type="submit" colorScheme="teal" mt={4} w="70%">
            Submit
          </Button>
        </form>
      </Box>
    </Center>
  );
}

export default ProductForm;
