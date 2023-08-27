'use client'


import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react'
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc'



const Feature = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  )
}

export default function Home4() {
  return (
    <Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={FcAssistant} w={10} h={10} />}
          title={'Lifetime Support'}
          text={
            `

            At Barajiakur-Mart, our unwavering focus is your satisfaction. Our 24/7 live chat and helpline ensure instant assistance for queries, recommendations, and order tracking. Discover detailed product insights, easy returns, and personalized guidance. We're here to enhance your grocery shopping with convenience and care. Choose us for fresher groceries and exceptional support.`
          }
        />
        <Feature
          icon={<Icon as={FcDonate} w={10} h={10} />}
          title={'Unlimited Donations'}
          text={
            'Experience the power of giving without boundaries. With our unlimited donation initiative, you can make an everlasting impact on causes that matter. Join us in creating positive change and spreading hope far and wide. Your generosity knows no limits.'
          }
        />
        <Feature
          icon={<Icon as={FcInTransit} w={10} h={10} />}
          title={'Instant Delivery'}
          text={
           `Experience the ultimate convenience with our instant grocery delivery service. Order your essentials, and we'll have them at your doorstep in no time. Say goodbye to waiting and hello to hassle-free shopping. Your time matters, and we're here to make it count.`
          }
        />
      </SimpleGrid>
    </Box>
  )
}