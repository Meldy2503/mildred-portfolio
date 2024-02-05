import { Box, Text, Flex, Heading } from "@chakra-ui/react";
import React from "react";

const LandingPage = () => {
  return (
    // <Flex h={"100vh"} bg="brand.100" align={'center'} justify={'center'} px='4rem'>
    <Box h={"100vh"} bg="brand.100" px='4rem'position={'relative'} >
      <Flex justify={"space-between"} direction={{ base: "column", md: "row" }}>
        <Box w={{ base: "100%", md: "45%" }}>
          <Heading fontSize={'7rem'}>Lorem ipsum dolor sit amet</Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            vel quod cum necessitatibus autem aliquid, impedit eligendi?
            Accusamus, doloremque tempora.
          </Text>
        </Box>
        <Box w={{ base: "100%", md: "50%" }} >
          <Box h='100vh' w='15%' bg='brand.150' position={'absolute'} right={'0'}/>
          <Box w={{ base: "100%", md: "50%" }} h='15%' bg='brand.150' position={'absolute'} right={'0'} bottom='0' />
          <Text>jjjjjjjj</Text>
        </Box>
      </Flex>
      </Box>
  );
};

export default LandingPage;
