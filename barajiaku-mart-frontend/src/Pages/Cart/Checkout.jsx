
import { Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Checkout = () => {
  return (
    <div>
    <Button><Link to={'/payment'}>Payment</Link></Button>
    </div>
  )
}

export default Checkout
