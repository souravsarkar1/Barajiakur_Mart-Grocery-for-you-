import { Heading, Thead, Tr, Th, Td, Table, Skeleton, Image, Box, Grid, Button } from '@chakra-ui/react';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const MyProduct = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true); // Set initial state to true
  const token = useSelector(st => st.sellerAuthReducer.token);

  useEffect(() => {
    setLoader(true);
    axios.get(`https://barajiakurmartbe.onrender.com/data/mydata`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        setData(res.data.data);
        setLoader(false); // Set loader to false on successful fetch
      })
      .catch((err) => {
        console.log(err);
        setLoader(false); // Set loader to false on error
      });
  }, [token]);
  const handleDelete = (id) => {
    axios.delete(`https://barajiakurmartbe.onrender.com/data/delete/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }).then((res) => {
      console.log(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }

  const handleUpdate = (id) => {
    axios.patch(`https://barajiakurmartbe.onrender.com/data/update/${id}`, {}, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }).then((res) => {
      console.log(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }
  return (
    <div>
      <Heading>My Product</Heading>
      <Box overflowX="auto">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Title</Th>
              <Th>Description</Th>
              <Th>Image 1</Th>
              <Th>Image 2</Th>
              <Th>Seller</Th>
              <Th>Price</Th>
              <Th>Stock</Th>
              <Th>Rating</Th>
              <Th>Options</Th>
            </Tr>
          </Thead>
          {loader ? (
            // Show loading skeletons while data is being fetched
            <tbody>
              <Tr>
                <Td>
                  <Skeleton height="20px" />
                </Td>
                <Td>
                  <Skeleton height="20px" />
                </Td>
                <Td>
                  <Skeleton height="20px" />
                </Td>
                <Td>
                  <Skeleton height="20px" />
                </Td>
                <Td>
                  <Skeleton height="20px" />
                </Td>
                <Td>
                  <Skeleton height="20px" />
                </Td>
                <Td>
                  <Skeleton height="20px" />
                </Td>
                <Td>
                  <Skeleton height="20px" />
                </Td>
              </Tr>
            </tbody>
          ) : (
            // Render fetched data
            <tbody>
              {data.map((el) => (
                <Tr key={el._id}>
                  <Td>{el.title}</Td>
                  <Td>{el.desc}</Td>
                  <Td><Image src={el.img1} h={"10"} w={"20px"} /></Td>
                  <Td><Image src={el.img2} h={"10"} w={"20px"} /></Td>
                  <Td>{el.sellerName}</Td>
                  <Td>{el.price}</Td>
                  <Td>{el.stock ? "Yes" : "No"}</Td>
                  <Td>{el.rating}</Td>
                  <Td>
                    <Grid>
                      <Button onClick={() => handleDelete(el._id)} colorScheme='red'>Delete</Button>
                      <Button onClick={() => handleUpdate(el._id)} colorScheme='blue'><Link style={{
                        textDecoration: 'none',     // Remove underline
                        color: 'inherit',          // Prevent default color change on hover
                      }} to={`/myproducts/${el._id}`}>Edit</Link></Button>
                    </Grid>
                  </Td>
                </Tr>
              ))}
            </tbody>
          )}
        </Table>
      </Box>
    </div>
  );
};

export default MyProduct;
