'use client'


import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import React from "react";
import bgImg from "./assets/img2.jpg";
import Image from "next/image";
import { Btn } from "./utils/button";

const DiscoverMore = () => {
  return (
    <Flex
      h="75vh"
      className="bg"
      align={"center"}
      justify="center"
      direction={"column"}
      mx="auto"
    >
      <Box color="brand.100" w={{base: '95%', sm: '80%', lg: '60%'}} textAlign={'center'}>
        <Heading fontSize={{base: '4rem', md: '5rem'}} lineHeight={1.2}>
          Letting You Have The Best Content Experience
        </Heading>
        <Text my='3rem' w={{base: '100%',  lg: '70%'}} mx='auto'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
          ratione molestias officia ipsam modi suscipit dignissimos ut nesciunt,
          odio cupiditate.{" "}
        </Text>
        <Btn ClassName="pulse-animate">
          Discover More
        </Btn>

      </Box>
    </Flex>
  );
};

export default DiscoverMore;
