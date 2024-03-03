"use client";

import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import star1 from "../assets/Star2.svg";
import star from "../assets/Star7.svg";
import { serviceData } from "../utils/constants";
import Wrapper from "../utils/wrapper";

const Services = () => {
  return (
    <Wrapper bg="brand.150" id="services">
      <Image
        src={star}
        alt="star image"
        height={800}
        width={800}
        style={{
          maxWidth: "100%",
          objectFit: "cover",
          objectPosition: "center",
          width: "25rem",
          position: "absolute",
          top: "-8rem",
          right: "-10rem",
        }}
      />
      <Image
        src={star1}
        alt="star image"
        height={800}
        width={800}
        style={{
          maxWidth: "100%",
          objectFit: "cover",
          objectPosition: "center",
          width: "10rem",
          position: "absolute",
          bottom: "1rem",
          left: "25%",
        }}
      />

      <motion.div
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <Flex
          justify={"space-between"}
          align={"center"}
          color="brand.200"
          columnGap="2rem"
          rowGap="4rem"
          flexWrap={"wrap"}
        >
          {serviceData.map((card, index) => {
            return (
              <Flex
                key={index}
                zIndex={100}
                border="1px solid #4a4a4a"
                w={{ base: "100%", md: "47%", lg: "31%" }}
                py="4rem"
                px={{ base: "2rem", xl: "3rem" }}
                bg={card.id === "3" ? "brand.100" : "brand.150"}
                color={card.id === "3" ? "brand.150" : "brand.400"}
                transition={"all .3s linear"}
                _hover={{
                  transform:
                    card.id === "1" ? "rotate(-10deg)" : "rotate(10deg)",
                }}
                mx="auto"
              >
                <Box>
                  <Box fontSize="7rem" fontWeight={100}>
                    {card.icon}
                  </Box>
                  <Heading my="3rem" fontSize={"3rem"}>
                    {card.title}
                  </Heading>
                  <Text>{card.text}</Text>
                </Box>
              </Flex>
            );
          })}
        </Flex>
      </motion.div>
    </Wrapper>
  );
};

export default Services;
