"use client";

import React from "react";
import { Box, Text, Flex, Heading, Icon, Divider } from "@chakra-ui/react";
import Image from "next/image";
import bgImage from "./assets/hero-img1.svg";
import { Btn } from "./utils/button";
import { FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { Canvas } from "@react-three/fiber";
import {
  GradientTexture,
  MeshDistortMaterial,
  OrbitControls,
  Sphere,
} from "@react-three/drei";

import { subscribe } from "diagnostics_channel";

const LandingPage = () => {
  const data = [
    {
      icon: <FaYoutube />,
      iconColor: "#ff2149",
      title: "YouTube",
      text: "Please subscribe to my official channel for updated content.",
      subscribersNo: "5K+",
      subText: "SubScribers",
      btnText: "SubScribe",
    },
    {
      icon: <AiFillInstagram />,
      iconColor: "#1e2434",
      title: "Instagram",
      text: "Don't forget to follow my Instagram account for short videos",
      subscribersNo: "1K+",
      subText: "Followers",
      btnText: "Follow",
    },
  ];


  return (
    <Box
      id="home"
      pt="10rem"
      pb= "8rem"
      className="pattern"
      color="brand.100"
      overflow={"hidden"}
    >
      <Flex
        justify={"space-between"}
        direction={{ base: "column", xl: "row" }}
        align={"center"}
        maxW={"1280px"}
        mx="auto"
        w="95%"
        rowGap={{ base: "0rem", xl: "5rem" }}
         mt="2rem"
      >
        <Flex
          align={{ base: "center", xl: "flex-start" }}
          // justify={{ base: "center", xl: "flex-start" }}
          w={{ base: "100%", xl: "30%" }}
          direction={"column"}
          mt={{ base: "3rem", xl: "0rem" }}
          textAlign={{ base: "center", xl: "left" }}
          // mx='auto'
        >
          <Text
            color="brand.250"
            fontSize={"1.4rem"}
            fontWeight={"600"}
            letterSpacing={".2rem"}
          >
            WELCOME TO MY PAGE
          </Text>
          <Heading
            fontSize={{ base: "4rem", md: "5rem" }}
            py="1.5rem"
            w={{ base: "100%", sm: "80%", lg: "100%" }}
          >
            Ensuring the Best Viewing Experience
          </Heading>
          <Text
            pb="2.5rem"
            color="brand.400"
            w={{ base: "95%", sm: "70%", lg: "100%" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            vel quod cum necessitatibus autem aliquid, impedit eligendi?
          </Text>
          <Btn>Discover More</Btn>
        </Flex>
        <Flex
          w={{ base: "100%", xl: "75%" }}
          direction={{ base: "column", lg: "row" }}
          align={{ base: "center", xl: "flex-start" }}
        >
          <Flex
            w={{ base: "100%", xl: "50%" }}
            mt={{ base: "0rem", xl: "5rem" }}
            h="50rem"
            position={"relative"}
            align={"center"}
            justify={"center"}
          >
            <Canvas>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.7}>
                <MeshDistortMaterial
                  // attach={"material"}
                  distort={0.5}
                  speed={2}
                  //color={"rgb(79, 95, 135)"}
                  color={"#ff5621"}
                />
              </Sphere>
            </Canvas>
            <Box position={"absolute"} top="5rem" mx="auto">
              <Image
                src={bgImage}
                alt="youtube photo"
                width={800}
                height={800}
                style={{
                  width: "38rem",
                  maxWidth: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Flex>
          {/* </Box> */}
          <Flex
            w={{ base: "100%", xl: "50%" }}
            direction={"column"}
            gap="3rem"
            mt={{ base: "0rem", xl: "9rem" }}
            color="brand.150"
          >
            {data.map((item, index) => {
              return (
                <Flex
                  bg="brand.100"
                  py="2rem"
                  px="1rem"
                  gap="1rem"
                  shadow={"xl"}
                  borderRadius={"1rem"}
                  key={index}
                >
                  <Flex gap="1rem" w="70%">
                    <Box
                      style={{
                        cursor: "pointer",
                        color: item.iconColor,
                        fontSize: "4rem",
                      }}
                    >
                      {item.icon}
                    </Box>

                    <Box>
                      <Heading
                        fontStyle={"300"}
                        fontSize={"1.7rem"}
                        color="brand.150"
                      >
                        {item.title}
                      </Heading>
                      <Text fontSize={"1.45rem"} mt=".5rem">
                        {item.text}
                      </Text>
                    </Box>
                    <Divider orientation="vertical" mx="1rem" />
                  </Flex>
                  <Box>
                    <Heading
                      fontStyle={"300"}
                      fontSize={"1.4rem"}
                      fontWeight={500}
                      color="brand.450"
                      textAlign={"center"}
                      mb="1rem"
                    >
                      <span
                        style={{
                          fontSize: "3rem",
                          fontWeight: "700",
                          letterSpacing: ".1rem",
                        }}
                      >
                        {item.subscribersNo}
                      </span>{" "}
                      <br />
                      {item.subText}
                    </Heading>
                    <Btn fontSize="1.1rem" py="1.6rem" px="2rem">
                      {item.btnText}
                    </Btn>
                  </Box>
                </Flex>
              );
            })}
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default LandingPage;
