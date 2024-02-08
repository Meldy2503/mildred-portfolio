import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import React from "react";
import bgImg from "./assets/img2.jpg";
import Image from "next/image";
import { Btn } from "./utils/button";

const Subscribe = () => {
  return (
    <Flex
      h="75vh"
      className="bg"
      align={"center"}
      justify="center"
      direction={"column"}
      mx="auto"
    >
      <Box color="brand.100" w="60%" textAlign={'center'}>
        <Heading fontSize={"5rem"}>
          Letting You Have The Best Content Experience
        </Heading>
        <Text my='3rem' w='70%' mx='auto'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
          ratione molestias officia ipsam modi suscipit dignissimos ut nesciunt,
          odio cupiditate.{" "}
        </Text>
        <Btn>
          Discover More
        </Btn>

      </Box>
    </Flex>
  );
};

export default Subscribe;
