"use client";

import React from "react";
import Wrapper from "./utils/wrapper";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import bgImage from "./assets/img1.webp";
import Image from "next/image";

const AboutSection = () => {
  return (
    <Wrapper id="about" bg="brand.300">
      <Flex
        justify={"space-between"}
        align={"center"}
        gap="2rem"
        direction={{ base: "column", lg: "row-reverse" }}
      >
        <Box
          w={{ base: "100%", lg: "50%" }}
          position={"relative"}
          zIndex={"100"}
        >
          <Image
            src={bgImage}
            alt="author's photo"
            width={800}
            height={800}
            style={{
              margin: "auto",
              borderRadius: "1rem",
              maxWidth: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
        <Box w={{ base: "100%", lg: "42%" }}>
          <Text
            color="brand.250"
            fontSize={"1.4rem"}
            fontWeight={"700"}
            letterSpacing={".2rem"}
          >
            ABOUT ME
          </Text>
          <Heading
            fontSize={{ base: "3.5rem", md: '4.5rem', lg: "5rem" }}
            pt="1rem"
            pb="2rem"
          >
            Get to Know Me
          </Heading>

          <Text pb="2rem" lineHeight={1.7} color='brand.500'>
            Hello, I'm Mildred Ken, a versatile individual who wears many hats
            with grace and enthusiasm. As a loving mother, my journey is a
            tapestry of joy, growth, and the beautiful chaos that comes with
            raising a family. Beyond the role of a mom, I'm is a dynamic social
            media influencer, leaving an indelible mark on digital platforms. My
            online presence is a captivating blend of authenticity and
            relatability, creating a virtual community where followers feel like
            cherished friends.As a content creator, I weave storytelling magic
            into each piece, dedicating myself to crafting engaging and
            meaningful contents. Join me on this journey of joy, growth, and
            creativity.
          </Text>
        </Box>
      </Flex>
    </Wrapper>
  );
};

export default AboutSection;
