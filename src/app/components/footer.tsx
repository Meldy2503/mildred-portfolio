"use client";

import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare, FaPlay, FaYoutube } from "react-icons/fa";
import Wrapper from "../utils/wrapper";

const Footer = () => {
  return (
    <Wrapper bg="brand.150" py="2rem">
      <Flex
        color="brand.400"
        py="4rem"
        gap="5rem"
        mx={"auto"}
        align={{ base: "center", md: "flex-start" }}
        justify={{ base: "center", md: "space-between" }}
        direction={{ base: "column", md: "row" }}
      >
        <Flex
          w={{ base: "100%", md: "18%" }}
          justify={"center"}
          align={"center"}
          mx="auto"
          gap="1rem"
        >
          <FaPlay
            style={{
              fontSize: "3.5rem",
              color: "#ff5621",
            }}
          />
          <Text
            fontSize={{ base: "2.5rem", md: "3rem" }}
            color="brand.100"
            fontWeight={"800"}
          >
            Mildred
          </Text>
        </Flex>

        <Flex
          w={{ base: "100%", lg: "83%" }}
          justify="space-between"
          flexWrap={"wrap"}
          rowGap="5rem"
          columnGap={"3rem"}
        >
          <Flex direction={"column"} gap="1.5rem">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </Flex>
          <Flex direction={"column"} gap="1.5rem">
            <a href="#services">Services</a>
            <a href="#videos">Discover More</a>
          </Flex>
          <Flex direction={"column"} align={"center"}>
            <Text mb="1.5rem">Get in Touch</Text>
            <Flex gap="1rem" fontSize={"2.2rem"}>
              <a
                href="https://www.facebook.com/profile.php?id=100072489630456&mibextid=2JQ9oc"
                target="_blank"
              >
                <FaFacebookSquare />
              </a>
              <a href="https://www.youtube.com/@mildredken7981" target="_blank">
                <FaYoutube />
              </a>
              <a
                href="https://www.instagram.com/ekwensimildred?igsh=MTI2ZXlvMTltYnkzZQ%3D%3D&utm_source=qr"
                target="_blank"
              >
                <AiFillInstagram />
              </a>
            </Flex>
          </Flex>
          <Box w="33rem" mx={{ base: "auto", lg: "0rem" }}>
            <a
              href="https://www.youtube.com/@mildredken7981"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Heading
                bgGradient="linear(to-r, #ff5621 14.03%, #ff2149 65.34%)"
                textAlign={"center"}
                py="1.5rem"
                color="brand.100"
              >
                Subscribe to my Channel
              </Heading>
            </a>
            <Text
              mt="1.5rem"
              fontSize={"1.5rem"}
              fontWeight={300}
              textAlign={{ base: "center", md: "left" }}
            >
              Bringing you the best unboxing videos of the latest news and funny
              clips! Subscribe to my channel to not miss a thing!
            </Text>
          </Box>
        </Flex>
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
