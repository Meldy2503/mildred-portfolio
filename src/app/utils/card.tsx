"use client";

import { Box, Flex, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Btn } from "./button";
import { aboutData } from "./constants";
const Card = () => {
  const [isMobile] = useMediaQuery("(max-width: 374px)");
  const [isTablet] = useMediaQuery("(max-width: 768px)");

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      gap="3rem"
      color="brand.150"
    >
      {aboutData.map((item, index) => {
        return (
          <motion.div
            initial={{
              x: index === 1 ? 200 : -200,
              opacity: 0,
            }}
          
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true }}
            key={index}
          >
            <Flex
              bg="brand.100"
              py="2rem"
              px={{ base: "1rem", lg: "3rem" }}
              gap={isMobile ? "1rem" : ".5rem"}
              justify={"space-between"}
              borderRadius={"1rem"}
              direction={isMobile ? "column" : "row"}
              align="center"
            >
              <Flex gap="1rem" w={isMobile ? "100%" : "65%"}>
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
              </Flex>
              <Box
                width=".1rem"
                bg="brand.350"
                mx={isMobile ? "0rem" : "1rem"}
                h={isMobile ? "0rem" : "8rem"}
              />
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
                <Btn href={item.href} fontSize="1.35rem" py=".75rem" px="2rem">
                  {item.btnText}
                </Btn>
              </Box>
            </Flex>
          </motion.div>
        );
      })}
    </Flex>
  );
};

export default Card;
