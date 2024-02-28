"use client";

import { Box, Flex, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import arthurImage from "./assets/authur-img.webp";
import Card from "./utils/card";
import Wrapper from "./utils/wrapper";

const AboutSection = () => {
  const [isMobile] = useMediaQuery("(max-width: 374px)");

  return (
    <Wrapper id="about" bg="brand.300">
      <Flex
        justify={"space-between"}
        align={"center"}
        gap={{ base: "3rem", md: "10rem" }}
        direction="column"
      >
        <Flex
          justify={"space-between"}
          align={"center"}
          gap="5rem"
          direction={{ base: "column", md: "row" }}
        >
          <Box
            w={{ base: "100%", md: "45%" }}
            position={"relative"}
            zIndex={"100"}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              <Image
                src={arthurImage}
                alt="author's photo"
                width={800}
                height={800}
                style={{
                  margin: "auto",
                  borderRadius: "1rem",
                  maxWidth: "100%",
                  objectFit: "cover",
                  objectPosition: "top",
                }}
              />
            </motion.div>
          </Box>
          <Box w={{ base: "100%", md: "50%", lg: "45%" }}>
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              <Text
                color="brand.250"
                fontSize={"1.4rem"}
                fontWeight={"700"}
                letterSpacing={".2rem"}
              >
                ABOUT ME
              </Text>
              <Heading
                fontSize={{ base: "3.5rem", md: "4.5rem", lg: "5rem" }}
                pt="1rem"
                pb="2rem"
              >
                Get to Know Me
              </Heading>

              <Text pb="2rem" lineHeight={1.7} color="brand.500">
                Hello, I'm Mildred Ken, a versatile individual who wears many
                hats with grace and enthusiasm. As a loving mother, my journey
                is a tapestry of joy, growth, and the beautiful chaos that comes
                with raising a family. Beyond the role of a mom, I'm is a
                dynamic social media influencer, leaving an indelible mark on
                digital platforms. <br /> My online presence is a captivating
                blend of authenticity and relatability, creating a virtual
                community where followers feel like cherished friends.I weave
                storytelling magic into each piece, dedicating myself to
                crafting engaging contents. Join me on this journey of joy,
                growth, and creativity.
              </Text>
            </motion.div>
          </Box>
        </Flex>
        <Card />
      </Flex>
    </Wrapper>
  );
};

export default AboutSection;
