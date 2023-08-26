'use client'

import { useState } from 'react'
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
} from '@chakra-ui/react'

import { useToast } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const Form1 = () => {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show);
  const [fisetName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        Payment From
      </Heading>
      <Flex>
        <FormControl mr="5%">
          <FormLabel htmlFor="first-name" fontWeight={'normal'}>
            First name
          </FormLabel>
          <Input id="first-name" placeholder="First name" value={fisetName} onChange={(e) => setFirstName(e.target.value)} />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="last-name" fontWeight={'normal'}>
            Last name
          </FormLabel>
          <Input id="last-name" placeholder="First name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </FormControl>
      </Flex>
      <FormControl mt="2%">
        <FormLabel htmlFor="number" fontWeight={'normal'}>
          Card Number
        </FormLabel>
        <Input id="number" type="number" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="password" fontWeight={'normal'} mt="2%">
          Cvv
        </FormLabel>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? 'number' : 'password'}
            placeholder="Enter cvv"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </>
  )
}

const Form2 = ({ country, setCountry, streetAddress, setStreetAddress, city, setCity, stateProvince, setStateProvince, postalCode, setPostalCode }) => {




  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        User Address
      </Heading>
      <FormControl as={GridItem} colSpan={[6, 3]}>
        <FormLabel
          htmlFor="country"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}>
          Country / Region
        </FormLabel>
        <Select
          id="country"
          name="country"
          autoComplete="country"
          placeholder="Select option"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          <option>India</option>
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </Select>
      </FormControl>

      <FormControl as={GridItem} colSpan={6}>
        <FormLabel
          htmlFor="street_address"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          Street address
        </FormLabel>
        <Input
          type="text"
          name="street_address"
          id="street_address"
          autoComplete="street-address"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          value={streetAddress}
          onChange={(e) => setStreetAddress(e.target.value)}
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
        <FormLabel
          htmlFor="city"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          City
        </FormLabel>
        <Input
          type="text"
          name="city"
          id="city"
          autoComplete="city"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel
          htmlFor="state"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          State / Province
        </FormLabel>
        <Input
          type="text"
          name="state"
          id="state"
          autoComplete="state"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          value={stateProvince}
          onChange={(e) => setStateProvince(e.target.value)}
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel
          htmlFor="postal_code"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          ZIP / Postal
        </FormLabel>
        <Input
          type="text"
          name="postal_code"
          id="postal_code"
          autoComplete="postal-code"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
        />
      </FormControl>
    </>
  )
}

const Form3 = ({ opt, setOtp }) => {

  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal">
        Enter Your Mobile OTP
      </Heading>
      <SimpleGrid columns={1} spacing={6}>

        <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
          <FormLabel
            htmlFor="otp"
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}
            mt="2%">
            OTP
          </FormLabel>
          <Input
            type="text"
            name="otp"
            id="otp"
            autoComplete="otp"
            focusBorderColor="brand.400"
            shadow="sm"
            size="sm"
            w="full"
            rounded="md"
            onChange={(e) => setOtp(e.target.value)}
          />
        </FormControl>
        <FormControl id="email" mt={1}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}>
            Addtitional Message If Any
          </FormLabel>
          <Textarea
            placeholder="delevery..."
            rows={3}
            shadow="sm"
            focusBorderColor="brand.400"
            fontSize={{
              sm: 'sm',
            }}
          />
          <FormHelperText>
            Brief description for your profile. URLs are hyperlinked.
          </FormHelperText>
        </FormControl>
      </SimpleGrid>
    </>
  )
}

export default function Multistep() {
  const toast = useToast()
  const [step, setStep] = useState(1)
  const [progress, setProgress] = useState(33.33)
  const [otp, setOtp] = useState();
  const navigate = useNavigate();
  const [country, setCountry] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [stateProvince, setStateProvince] = useState('');
  const [postalCode, setPostalCode] = useState('');
const checkingFunctin = ()=>{
  if (!country || !streetAddress || !city || !stateProvince || !postalCode) {
    return true;
  }
  else{
    return false
  }
}
  return (
    <>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form">
        <Progress hasStripe value={progress} mb="5%" mx="5%" isAnimated></Progress>
        {step === 1 ? <Form1 /> : step === 2 ? <Form2 country={country} setCountry={setCountry} streetAddress={streetAddress} setStreetAddress={setStreetAddress} postalCode={postalCode} setPostalCode={setPostalCode} city={city} setCity={setCity} stateProvince={stateProvince} setStateProvince={setStateProvince} /> : <Form3 opt={otp} setOtp={setOtp} />}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1)
                  setProgress(progress - 33.33)
                }}
                isDisabled={step === 1}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5%">
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 3}
                onClick={() => {
                  setStep(step + 1)
                  if (step === 3) {
                    setProgress(100)
                  } else {
                    setProgress(progress + 33.33)
                  }
                }}
                colorScheme="teal"
                variant="outline">
                Next
              </Button>
            </Flex>
            {step === 3 ? (
              <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                onClick={() => {
                  if(checkingFunctin()){
                    toast({
                      title: 'Payment Not Sucessful!',
                      description: "Plase Enter a Valid OTP!",
                      status: 'error',
                      duration: 3000,
                      isClosable: true,
                      position: "top"
                    })
                  }
                 else if (otp === "1234") {
                    toast({
                      title: 'Payment Sucessful!',
                      description: "Your product will delevery as soon as possible",
                      status: 'success',
                      duration: 3000,
                      isClosable: true,
                      position: "top"
                    })
                    setTimeout(() => {
                      navigate('/')
                    }, 2000);
                  } else {
                    toast({
                      title: 'Payment Not Sucessful!',
                      description: "Plase Enter a Valid OTP!",
                      status: 'error',
                      duration: 3000,
                      isClosable: true,
                      position: "top"
                    })
                  }

                }}>
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  )
}