"use client";

import { Box, Flex, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import Image from "next/image";
import bgImage from "../assets/hero-img1.svg";
import { Btn } from "../utils/button";
import { heroData } from "../utils/constants";

const LandingPage = () => {
  const [isMobile] = useMediaQuery("(max-width: 374px)");

  return (
    <Flex
      id="home"
      pt="8rem"
      pb="5rem"
      className="pattern"
      color="brand.100"
      h={{ base: "100%", xl: "100vh" }}
      align={"center"}
      justify={"center"}
    >
      <Flex
        justify={"space-between"}
        direction={{ base: "column", xl: "row" }}
        align={"center"}
        maxW={"1280px"}
        mx="auto"
        w={{ base: "100%", xl: "95%" }}
        rowGap={{ base: "0rem", xl: "5rem" }}
        mt="2rem"
      >
        <Flex
          align={{ base: "center", xl: "flex-start" }}
          w={{ base: "100%", xl: "34%" }}
          direction={"column"}
          mt={{ base: "3rem", xl: "0rem" }}
          textAlign={{ base: "center", xl: "left" }}
        >
          <motion.div
            initial={{ x: -800 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <Box>
              <Text
                color="brand.250"
                fontSize={"1.4rem"}
                fontWeight={"700"}
                letterSpacing={".2rem"}
              >
                WELCOME TO MY OFFICIAL PAGE
              </Text>
              <Heading
                fontSize={{ base: "4rem", md: "5.5rem" }}
                py="1.5rem"
                w={{ base: "100%", sm: "85%", xl: "100%" }}
                textAlign={{ base: "center", xl: "left" }}
                mx={{ base: "auto", xl: "0" }}
              >
                Elevate your Entertainment Journey
              </Heading>
              <Text
                pb="2.5rem"
                color="brand.400"
                w={{ base: "95%", sm: "70%", xl: "100%" }}
                mx={{ base: "auto", xl: "0" }}
              >
                Explore a world where every detail comes to life, captivating
                your senses and redefining your viewing experience.
              </Text>
              <Flex justify={{ base: "center", xl: "flex-start" }}>
                <Btn href="https://www.youtube.com/@mildredken7981">
                  Discover More
                </Btn>
              </Flex>
            </Box>
          </motion.div>
        </Flex>
        <Flex
          w={{ base: "100%", xl: "75%" }}
          direction={{ base: "column", md: "row" }}
          align={{ base: "center", xl: "flex-start" }}
        >
          <Flex
            w={{ base: "100%", xl: "60%" }}
            mt={{ base: "2rem", xl: "5rem" }}
            h="50rem"
            position={"relative"}
            align={"center"}
            justify={"center"}
          >
            <Canvas>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.5}>
                <MeshDistortMaterial
                  distort={0.5}
                  speed={2}
                  color={"#ff5621"}
                />
              </Sphere>
            </Canvas>
            <Box position={"absolute"} top="2rem" mx="auto">
              <Image
                src={bgImage}
                alt="youtube photo"
                width={800}
                height={800}
                style={{
                  width: "35rem",
                  maxWidth: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Flex>
          <Flex
            w={{ base: "100%", xl: "40%" }}
            direction={"column"}
            gap="2rem"
            mt={{ base: "0rem", xl: "11rem" }}
            color="brand.150"
            px={{ base: "1rem", sm: "2rem", xl: "0" }}
          >
            {heroData.map((item, index) => {
              return (
                <motion.div
                  initial={{ x: 800 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  key={index}
                >
                  <Flex
                    bg="brand.350"
                    p="2rem"
                    gap="1rem"
                    shadow={"xl"}
                    borderRadius={"1rem"}
                    justify={"center"}
                    alignItems={"center"}
                    direction={isMobile ? "column" : "row"}
                    align="center"
                  >
                    <Heading
                      fontStyle={"300"}
                      fontSize={"4rem"}
                      fontWeight={700}
                      color="brand.450"
                      textAlign={"center"}
                      letterSpacing={".2rem"}
                    >
                      {item.subscribersNo}
                    </Heading>
                    <Box
                      width=".1rem"
                      bg="brand.200"
                      mx={isMobile ? "0rem" : "1rem"}
                      h={isMobile ? "0rem" : "5rem"}
                    />
                    <Text fontSize={"1.45rem"}>{item.text}</Text>
                  </Flex>
                </motion.div>
              );
            })}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default LandingPage;
