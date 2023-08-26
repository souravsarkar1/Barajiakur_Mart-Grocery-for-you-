import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../Redux/Data/action';
import ProductCard from '../../Components/Products/ProductCard';

import { Center, Grid, ChakraProvider } from '@chakra-ui/react'; // Import ChakraProvider
import ProductLoader from '../../Loader/ProductLoader';

const Products = () => {
  // Get token from Redux state
 // const token = useSelector(state => state.authReducer.token);
  
  // Get data from Redux state
  const data = useSelector(state => state.dataReducer.data);
  const getDataisLoading = useSelector(state => state.dataReducer.getDataisLoading);
  
  const dispatch = useDispatch();
  
  // Fetch data when the component mounts
  useEffect(() => {
    // Dispatch the action to get data using the token
    dispatch(getData());
  }, [dispatch]);
  
  console.log(data);
  if (getDataisLoading) {
  
    return (
      <Center margin={{ base: '200px auto auto auto', md: '200px auto auto auto' }}>
      <ProductLoader/>
      </Center>
    )
  }
  return (
    <ChakraProvider> {/* Wrap your content in ChakraProvider */}
      <div style={{ padding: '2rem' }}>
        <Grid templateColumns={{ base: '1fr', md: '1fr 1fr 1fr' }} gap={4}>
          {/* Map through the data and render ProductCard for each item */}
          {Array.isArray(data) && data.map((el) => (
            <Center key={el._id}>
              <ProductCard {...el} />
            </Center>
          ))}
        </Grid>
      </div>
    </ChakraProvider>
  );
};

export default Products;
