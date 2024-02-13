"use client";

import React from "react";
import Wrapper from "./utils/wrapper";
import { Box, Flex, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import bgImage from "./assets/img1.webp";
import Image from "next/image";

const AboutSection = () => {
   const [isMobile] = useMediaQuery("(max-width: 960px)")

  return (
    <Wrapper id="about" bg="brand.300">
      <Flex
        justify={"space-between"}
        align={"center"}
        gap="2rem"
        direction={{ base: "column-reverse", lg: "row" }}
      >
        <Box w={{ base: "100%", lg: "50%" }} position={"relative"} zIndex={'100'}>
          <Image
            src={bgImage}
            alt="author's photo"
            width={800}
            height={800}
            style={{
              margin: "auto",
              borderRadius: "1rem",
              maxWidth: '100%',
              objectFit: 'cover'
            }}
          />
          {/* <Box
            bg="brand.250"
            color="brand.100"
            h="13rem"
            display={{base: 'none', lg: 'block'}}
            w={{ base: "100%", lg: "22rem" }}
            position={{ base: "relative", lg: "absolute" }}
            bottom={{ base: "0", lg: "-5rem" }}
            right={{ base: "0", lg: "-4rem" }}
            borderRadius= "1rem" 
           
           >
            <Flex 
            p='2rem'
            mx='auto'
            gap='1rem'
            direction={'column'}
            >

            <Text>hhhhhhhhh</Text>
            <Text>hhhhhhhhhhhh</Text>
            <Text>ppppppp</Text>
            </Flex>
        </Box> */}
          </Box>
        <Box w={{ base: "100%", lg: "42%" }} >
          <Text
            color="brand.250"
            fontSize={"1.4rem"}
            fontWeight={"600"}
            letterSpacing={".2rem"}
          >
            ABOUT ME
          </Text>
          <Heading fontSize={{ base: "3.5rem", lg: "4rem" }} pt="1rem" pb='2rem'>
            Lorem ipsum dolor sit amet hhhhhhhhhh ffffffff
          </Heading>
          <Text pb="2rem">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            vel quod cum necessitatibus autem aliquid, impedit eligendi? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Accusamus vel
            quod cum necessitatibus autem aliquid, impedit eligendi?
            vel quod cum necessitatibus autem aliquid, impedit eligendi? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Accusamus vel
            quod cum necessitatibus autem aliquid, impedit eligendi?
          </Text>
        </Box>
      </Flex>
    </Wrapper>
  );
};

export default AboutSection;
