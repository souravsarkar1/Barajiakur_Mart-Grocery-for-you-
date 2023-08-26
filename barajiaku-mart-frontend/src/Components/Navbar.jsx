import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Heading,
  useColorMode,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logoutButtonHandeling } from '../Redux/Authencation/action'


const Links = [{ title: 'Home', id: 1, to: '/' }, { title: 'About Us', id: 2, to: '/about' }, { title: 'Contact', id: 3, to: '/contact', }, { title: 'Products', id: 4, to: '/product', }, { title: "Cart", id: 5, to: "/cart" }]
const Links2 = [{ title: 'Login', id: 1, to: '/login' }]
const Link3 = [{ title: 'Beacame A Seller', id: 1, to: '/seller' }];
const NavLink = (props) => {
  const { children } = props
  return (
    <Link
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      to={children.to}>
      <Button
        mt={1}
        w={'full'}
        bg={'blue.200'}
        color={'black'}
        rounded={'md'}
        _hover={{
          transform: 'translateY(-2px)',
          boxShadow: 'lg',
        }}
        textStyle={"bold"}
      >
        {children.title}
      </Button>
    </Link>
  )
}

export default function Navbar() {
  const isAuth = useSelector(st=>st.authReducer.isAuth);
  console.log(isAuth);
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const dispatch = useDispatch();
const handleLogout = ()=>{
  setTimeout(() => {
    dispatch(logoutButtonHandeling());
  }, 2000);
  
}
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} position={'fixed'} width={'100%'} zIndex={110}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Heading><Link to={'/'}>𝐵𝒶𝓇𝒶𝒿𝒾𝒶𝓀𝓊𝓇 𝑀𝒶𝓇𝓉</Link></Heading>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {Links.map((el) =>
                <NavLink key={el.id} >{el}</NavLink>
              )}
            </HStack>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {isAuth ? <Button colorScheme='red' onClick={handleLogout}  mt={1}
              w={'full'}
              rounded={'md'}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}
              textStyle={"bold"}>Logout</Button> : Links2.map((el) =>
                <NavLink key={el.id} >{el}</NavLink>
              )}
              {Link3.map((el)=>
                <NavLink key={el.id}>{el}</NavLink>
                )}
            </HStack>
          </HStack>
          <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
          <Flex alignItems={'center'}>

            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://img.icons8.com/?size=512&id=uSHYbs6PJfMT&format=png'
                  }
                />
              </MenuButton>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {isAuth ? <Button colorScheme='red' onClick={handleLogout}  mt={1}
              w={'full'}
              rounded={'md'}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}
              textStyle={"bold"}>Logout</Button> : Links2.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Link3.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  )
}