"use client";

import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Btn } from "../utils/button";
import CanvasComponent from "../utils/canvas";
import Card from "../utils/card";

const LandingPage = () => {
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
      position={"relative"}
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
            initial={{ x: -600 }}
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
          <CanvasComponent />

          <Card />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default LandingPage;
