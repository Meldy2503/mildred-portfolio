"use client";

import { Box, Flex, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import Wrapper from "./utils/wrapper";
import Image from "next/image";
import Video from "./assets/author2.webp";
import { IoPlayCircleOutline } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Btn } from "./utils/button";
import { VideoModal } from "./utils/modal";
import { videoData } from "./utils/constants";

const WatchVideos = () => {
  const [isMobile] = useMediaQuery("(max-width: 500px)");

  return (
    <Wrapper id="videos">
      <Flex gap="3rem" direction={{ base: "column", lg: "row" }}>
        <Box
          bg="brand.300"
          borderRadius={"1rem"}
          p={{ base: "1rem", md: "2rem" }}
          w={{ base: "100%", lg: "65%" }}
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
            <VideoModal
              triggerBtn={
                <IoPlayCircleOutline
                  style={{
                    position: "absolute",
                    top: "30%",
                    left: "0px",
                    right: "0px",
                    margin: "auto",
                    fontSize: isMobile ? "8rem" : "13rem",
                    color: "#fff",
                  }}
                />
              }
              src="https://www.youtube.com/embed/XNjBiqe5RcI"
            />
          </Box>
          <Box
            px={{ base: "0rem", md: "1rem" }}
            mt={{ base: "2rem", md: "3rem" }}
          >
            <Heading fontSize={"3rem"} fontWeight={"500"}>
              Explore Exciting and Funny Contents
            </Heading>

            <Text mt="1.5rem" mb="2rem"  color='brand.500'>
              Dive into a world of captivating experiences. Immerse yourself in
              a realm where every moment is a story waiting to be told.
            </Text>
            <Btn href="https://www.youtube.com/@mildredken7981">
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
          w={{ base: "100%", lg: "30%" }}
        >
          <Box
            bgGradient="linear(to-r, #ff5621 14.03%, #ff2149 65.34%)"
            borderRadius={"1rem"}
            h={{ base: "fit-content", lg: "40%" }}
            p="3rem"
          >
            <Heading fontSize={"2.8rem"} fontWeight={"500"}>
              Trending Videos
            </Heading>
            {videoData.map((item) => {
              return (
                <Box key={item.id} my="2rem">
                  <VideoModal
                    triggerBtn={<Text>{item.text}</Text>}
                    src={item.href}
                  />
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
            justify={"center"}
            align={"center"}
            color="brand.350"
          >
            <Text color="brand.250" fontWeight={"bold"} mb="1rem">
              SUBSCRIBE
            </Text>
            <Heading fontSize={"3rem"} fontWeight={"500"} textAlign={"center"}>
              Don't want to miss any updates?
            </Heading>
            <Text mt="2rem" mb="3rem" textAlign={"center"}  color='brand.350'>
              Stay ahead of the curve with latest updates. Whether it's
              groundbreaking innovations, funny videos or insightful contents, I
              will ensure you're always in the loop.
            </Text>
            <Btn href="https://www.youtube.com/@mildredken7981" >
              Subscribe Now
            </Btn>
          </Flex>
        </Flex>
      </Flex>
    </Wrapper>
  );
};

export default WatchVideos;
