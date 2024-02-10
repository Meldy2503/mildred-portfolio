"use client";

import { Box, Flex, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import Wrapper from "./utils/wrapper";
import Image from "next/image";
import Video from "./assets/author2.webp";
import { IoPlayCircleOutline } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Btn } from "./utils/button";

const WatchVideos = () => {
  const [isMobile] = useMediaQuery("(max-width: 500px)");

  const texts = [
    "hhhhhhhhhhhh",
    "hhhhhhhhhhhh",
    "hhhhhhhhhhhh",
    "hhhhhhhhhhhh",
  ];

  return (
    <Wrapper>
      <Flex gap="3rem" direction={{ base: "column", lg: "row" }}>
        <Box
          bg="brand.300"
          borderRadius={"1rem"}
          p={{ base: "1rem", md: "2rem" }}
          w={{base: '100%', lg: '65%'}}
        >
          <Box position={"relative"}>
            <Image
              src={Video}
              alt="star image"
              height={800}
              width={800}
              style={{
                maxWidth: "100%",
                objectFit: "cover",
                objectPosition: "center",
                borderRadius: "1rem",
                margin: "auto",
              }}
            />{" "}
            <IoPlayCircleOutline
              style={{
                position: "absolute",
                top: "30%",
                left: "0px",
                right: "0px",
                margin: "auto",
                fontSize: isMobile ? "8rem" : "13rem",
                color: "#f6f6f6",
                cursor: "pointer",
              }}
            />
          </Box>
          <Box
            px={{ base: "0rem", md: "1rem" }}
            mt={{ base: "2rem", md: "3rem" }}
          >
            <Heading fontSize={"3rem"} fontWeight={"500"}>
              Lorem ipsum dolor sit amet.
            </Heading>

            <Text mt="1.5rem" mb="2rem">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga at
              odio natus corporis corrupti quos impedit sint perspiciatis
              accusamus quibusdam.
            </Text>
            <Btn>
              <Flex align={"center"} gap=".5rem">
                <Text>Watch More</Text>
                <IoIosArrowRoundForward fontSize={"2.5rem"} />
              </Flex>
            </Btn>
          </Box>
        </Box>
        <Flex
          direction={"column"}
          gap="2rem"
          justify={"space-between"}
          color="brand.100"
          w={{base: '100%', lg: '30%'}}

        >
          <Box
            bg="brand.250"
            borderRadius={"1rem"}
            h={{ base: "fit-content", lg: "40%" }}
            p="3rem"
          >
            <Heading fontSize={"2.8rem"} fontWeight={"500"}>
              Trending Videos
            </Heading>
            {texts.map((text, index) => {
              return (
                <Box key={index} my="2rem">
                  <Text>#. {text}</Text>
                </Box>
              );
            })}
          </Box>
          <Flex
            bg="brand.150"
            h={{ base: "fit-content", lg: "55%" }}
            borderRadius={"1rem"}
            p="3rem"
            direction={"column"}
             justify={'center'}
            align={"center"}
            color='brand.350'
          >
             <Text color='brand.250' fontWeight={'bold'} mb='1rem'>
              SUBSCRIBE
            </Text>
            <Heading
              fontSize={"3rem"}
              fontWeight={"500"}
              textAlign={"center"}
            >
              Don't want to miss any latest updates?
            </Heading>
            <Text mt='2rem' mb='3rem'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam,
              quis. Lorem ipsum, dolor sit amet consectetur 
            </Text>
            <Btn>Subscribe Now</Btn>
          </Flex>
        </Flex>
      </Flex>
    </Wrapper>
  );
};

export default WatchVideos;
