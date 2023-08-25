import React from 'react';
import { Table, Tbody, Tr, Td } from '@chakra-ui/react';

const ProductTable = ({ img1, img2, title, desc, sellerName, price, stock, rating }) => {
    return (
        <Table variant="simple">
            
            <Tbody>

                <Tr >
                    <Td>{title}</Td>
                    <Td>{desc}</Td>
                    <Td>
                        <img src={img1} alt='img1' width={50} />
                    </Td>
                    <Td>
                        <img src={img2} alt='img2' width={50} />
                    </Td>
                    <Td>{sellerName}</Td>
                    <Td>${price}</Td>
                    <Td>{stock ? 'Yes' : 'No'}</Td>
                    <Td>{rating}</Td>
                </Tr>

            </Tbody>
        </Table>
    );
};

export default ProductTable;
