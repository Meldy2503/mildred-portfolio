import React from "react";
import { Box, Text, Flex, Heading } from "@chakra-ui/react";
import Image from "next/image";
import bgImage from './assets/img1.webp'

const LandingPage = () => {
  return (
    // <Flex h={"100vh"} bg="brand.100" align={'center'} justify={'center'} px='4rem'>
    <Box h={"100vh"} bg="brand.100">
      <Flex
        justify={"space-between"}
        direction={{ base: "column", md: "row" }}
        align={"center"}
      >
        <Box w={{ base: "100%", md: "40%" }} pl="4rem">
          <Heading fontSize={"7rem"}>Lorem ipsum dolor sit amet</Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            vel quod cum necessitatibus autem aliquid, impedit eligendi?
            Accusamus, doloremque tempora.
          </Text>
        </Box>
        <Box w={{ base: "100%", md: "55%" }} position={"relative"} h="100vh">
          <Box
            h="100%"
            w="25%"
            bg="brand.150"
            position={"absolute"}
            right={"0"}
          />
          <Flex
            w="100%"
            h="18%"
            bg="brand.150"
            position={"absolute"}
            right={"0"}
            bottom="0"
            >
            <Flex
            align={"center"}
            pt='4rem'
            justify={'center'}
            mx={'auto'}
            color={"brand.200"}
            gap={'4rem'}
            
            >

            <a href="http://">Facebook</a>
            <a href="http://">Youtube</a>
            <a href="http://">Instagram</a>
            <a href="http://">Twitter</a>
            </Flex>
          </Flex>

          <Box
            w="70%"
            bg="blue"
            h="80%"
            position={"absolute"}
            right={"0"}
            left={"0"}
            m="auto"
            top="5rem"
          >
            <Box h={'100%'} w='100%'>

            <Image src={bgImage} alt='authors image' height={800} width={800} style={{
              maxWidth: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              width: '100%',
              height: '100%',
            }}/>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default LandingPage;
