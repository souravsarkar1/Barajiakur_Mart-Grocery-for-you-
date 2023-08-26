import React, { useState, useEffect } from 'react';
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
import ButtonLoader from '../../Loader/ButtonLoader';
import { useParams } from 'react-router-dom';

function ProductEdit() {
  const [formData, setFormData] = useState({
    title: '',
    desc: '',
    img1: '',
    img2: '',
    price: 0,
    stock: false,
    rating: 0,
  });
  const [data, setData] = useState([]);
  const token = useSelector(state => state.sellerAuthReducer.token);
  
  // Correct way to get the id from useParams
  const { id } = useParams();
  
  const [isLoading, setLoading] = useState(false);

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

  useEffect(() => {
    axios.get(`https://barajiakurmartbe.onrender.com/data/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      setData(res.data.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }, [token, id]);

  const myData = data.find(el => el._id === id);
  const { title, desc, img1, img2, price, stock, rating } = myData;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await axios.patch(
        `https://barajiakurmartbe.onrender.com/cart/add/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('Data posted:', response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error posting data:', error);
      setLoading(false);
    }
  };

  return (
    <Center m="30px auto 0px auto">
      <Box p={4}>
        <form onSubmit={handleSubmit}>
          <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={4}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input type="text" name="title" value={title} onChange={handleInputChange} required />
            </FormControl>
            <FormControl>
              <FormLabel>Description</FormLabel>
              <Input type="text" name="desc" value={desc} onChange={handleInputChange} required />
            </FormControl>
            <FormControl>
              <FormLabel>Image 1 URL</FormLabel>
              <Input type="text" name="img1" value={img1} onChange={handleInputChange} />
            </FormControl>
            <FormControl>
              <FormLabel>Image 2 URL</FormLabel>
              <Input type="text" name="img2" value={img2} onChange={handleInputChange} />
            </FormControl>
            <FormControl>
              <FormLabel>Price</FormLabel>
              <Input type="number" name="price" value={price} onChange={handleInputChange} required />
            </FormControl>
            <FormControl>
              <FormLabel>Stock</FormLabel>
              <Checkbox name="stock" isChecked={stock} onChange={handleCheckboxChange}>
                In Stock
              </Checkbox>
            </FormControl>
            <FormControl>
              <FormLabel>Rating</FormLabel>
              <Input type="number" name="rating" value={rating} onChange={handleInputChange} required />
            </FormControl>
          </Grid>
          <Button type="submit" colorScheme="teal" mt={4} w="70%">
            {isLoading ? <ButtonLoader height={"40px"} width={"40"} /> : "Submit"}
          </Button>
        </form>
      </Box>
    </Center>
  );
}

export default ProductEdit;
