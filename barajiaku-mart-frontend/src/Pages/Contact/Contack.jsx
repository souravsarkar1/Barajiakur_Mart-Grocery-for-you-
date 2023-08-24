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
  VStack,
} from '@chakra-ui/react'
import { MdEmail, MdOutlineEmail } from 'react-icons/md'

const ContactPage = () => {
  const { hasCopied, onCopy } = useClipboard('your@email.com');

  return (
    <Flex align="center" justify="center" minH="80vh">
      <VStack spacing={8} w="full" maxW="lg">
        <Heading fontSize={{ base: '3xl', md: '4xl' }}>Contact Us</Heading>
        <Box as="form" w="full">
          <Stack spacing={4}>
            <FormControl id="name">
              <FormLabel>Your Name</FormLabel>
              <Input type="text" placeholder="John Doe" />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Your Email</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <MdOutlineEmail />
                </InputLeftElement>
                <Input type="email" placeholder="john@example.com" />
              </InputGroup>
            </FormControl>
            <FormControl id="message">
              <FormLabel>Your Message</FormLabel>
              <Textarea rows={4} placeholder="Write your message here..." />
            </FormControl>
            <Button colorScheme="blue" type="submit">
              Send Message
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
}

export default ContactPage;
