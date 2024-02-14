"use client";

import React from "react";
import { Box, Flex, Text, Heading, HStack } from "@chakra-ui/react";
import Wrapper from "./utils/wrapper";
import {
  FaPlay,
  FaFacebookSquare,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <Wrapper bg="brand.150" py="2rem">
      <Flex
        color="brand.400"
        py="4rem"
        justify='space-between'
        flexWrap={"wrap"}
        columnGap="3rem"
        rowGap="5rem"
        mx={"auto"}
        align={"flex-start"}
      >
       

        <HStack>
          <FaPlay
            style={{
              fontSize: "3.5rem",
              color: "#ff5621",
            }}
          />
          <Text fontSize={{ base: "2.5rem", md: "3rem" }} color="brand.100" fontWeight={"800"}>
            Mildred
          </Text>
        </HStack>
        {/* <Flex
          w={{ base: "90%", sm: "40%", lg: "40%", xl: "40%" }}
          justify={"space-between"}
          gap="5rem"
          mx={{ base: "auto", sm: "0" }}
        > */}
          <Flex direction={"column"} gap="2rem">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </Flex>
          <Flex direction={"column"} gap="2rem">
            <a href="#services">Services</a>
            <a href="#videos">Discover More</a>
          </Flex>
          <Box>
            <Text mb="1.5rem">Get in Touch</Text>
            <Flex gap="2rem" fontSize={'2.2rem'}>
              <FaFacebookSquare />
              {/* <FaFacebookF /> */}
              <FaYoutube />
              <AiFillInstagram />
            </Flex>
          </Box>
        {/* </Flex> */}
        <Box w="33rem" mx={{ base: "auto", lg: "0rem" }}>
          <Heading
            bgGradient="linear(to-r, #ff5621 14.03%, #ff2149 65.34%)"
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
