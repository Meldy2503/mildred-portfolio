"use client";

import {
  Box,
  Divider,
  Flex,
  Heading,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Image from "next/image";
import bgImage from "./assets/hero-img1.svg";
import { Btn } from "./utils/button";
import { heroData } from "./utils/constants";

const LandingPage = () => {
  const [isMobile] = useMediaQuery("(max-width: 374px)");

  return (
    <Box id="home" pt="8rem" pb="5rem" className="pattern" color="brand.100">
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
          w={{ base: "100%", xl: "34%" }}
          direction={"column"}
          mt={{ base: "3rem", xl: "0rem" }}
          textAlign={{ base: "center", xl: "left" }}
        >
          <Text
            color="brand.250"
            fontSize={"1.4rem"}
            fontWeight={"700"}
            letterSpacing={".2rem"}
          >
            WELCOME TO MY PAGE
          </Text>
          <Heading
            fontSize={{ base: "4rem", md: "5.5rem" }}
            py="1.5rem"
            w={{ base: "100%", sm: "85%", md: "70%", xl: "100%" }}
          >
            Elevate your Entertainment Journey
          </Heading>
          <Text
            pb="2.5rem"
            color="brand.400"
            w={{ base: "95%", sm: "70%", md: "60%", xl: "100%" }}
          >
            Explore a world where every detail comes to life, captivating your
            senses and redefining your viewing experience.
          </Text>
          <Btn href="https://www.youtube.com/@mildredken7981">
            Discover More
          </Btn>
        </Flex>
        <Flex
          w={{ base: "100%", xl: "75%" }}
          direction={{ base: "column", lg: "row" }}
          align={{ base: "center", xl: "flex-start" }}
        >
          <Flex
            w={{ base: "100%", xl: "55%" }}
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
            w={{ base: "100%", xl: "45%" }}
            direction={"column"}
            gap="3rem"
            mt={{ base: "0rem", xl: "11rem" }}
            color="brand.150"
          >
            {heroData.map((item, index) => {
              return (
                <Flex
                  bg="brand.100"
                  py="2rem"
                  px="1rem"
                  gap={isMobile ? "1rem" : ".5rem"}
                  shadow={"xl"}
                  borderRadius={"1rem"}
                  direction={isMobile ? "column" : "row"}
                  key={index}
                  align="center"
                >
                  <Flex gap="1rem" w={isMobile ? "100%" : "70%"}>
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
                    <Divider
                      orientation="vertical"
                      mx={isMobile ? "0rem" : "1rem"}
                    />
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
                    <Btn
                      href={item.href}
                      fontSize="1.35rem"
                      py=".75rem"
                      px="2rem"
                    >
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
