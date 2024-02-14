"use client";

import { Box, Heading, Text, Flex, HStack, VStack } from "@chakra-ui/react";
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
      >
      <VStack
        textAlign={"center"}
      color="brand.100"
        w={{ base: "95%", sm: "80%", lg: "60%" }}
      >
        <Heading fontSize={{ base: "4rem", md: "5rem" }} lineHeight={1.2}>
          Letting You Have The Best Content Experience
        </Heading>
        <Text my="3rem" w={{ base: "100%", lg: "70%" }} mx="auto">
          Immerse yourself in a world of unparalleled visual delight as we
          bring you the finest in viewing experiences, ensuring that
            each moment is a celebration of exceptional visual enjoyment.
        </Text>

        <Btn ClassName="pulse-animate" href='https://www.youtube.com/@mildredken7981'>Discover More</Btn>
      </VStack>
    </Flex>
  );
};

export default DiscoverMore;
