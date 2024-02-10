import { Box, Flex, Text, Heading, HStack } from "@chakra-ui/react";
import React from "react";
import Wrapper from "./utils/wrapper";
import { FaPlay } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper bg="brand.150" py="2rem">
      <Flex
        color="brand.400"
        py="4rem"
        justify={"space-between"}
        flexWrap={"wrap"}
        gap="5rem"
        mx={"auto"}
        align={'flex-start'}
      >
        <HStack>
          <FaPlay
            style={{
              fontSize: "4rem",
              color: "#ed4137",
              cursor: "pointer",
            }}
          />
          <Text color="brand.100" fontSize={"3rem"} fontWeight={'bold'}>
            Mildred
          </Text>
        </HStack>
        <Flex direction={"column"} gap="2rem">
          <Text>Home</Text>
          <Text>About</Text>
          <Text>Services</Text>
        </Flex>
        <Flex direction={"column"} gap="2rem">
          <Text>Videos</Text>
          <Text>contact</Text>
        </Flex>
        <Box w="33rem" mx={{ base: "auto", md: "0rem" }}>
          <Heading
            bg="brand.250"
            textAlign={"center"}
            py="1.5rem"
            color="brand.100"
          >
            Subscribe to my Channel
          </Heading>
          <Text mt="1.5rem" fontSize={"1.5rem"} fontWeight={300}>
            Bringing you the best unboxing videos of the latest news and funny
            clips! Subscribe to my channel to not miss a thing!
          </Text>
        </Box>
      </Flex>
      <Flex
        py="2rem"
        borderTop={"1px solid #4a4a4a"}
        color="brand.400"
        align={"center"}
        justify={"center"}
      >
        <Text>Copyright © 2024 Mildred Oluebube</Text>
      </Flex>
    </Wrapper>
  );
};

export default Footer;
