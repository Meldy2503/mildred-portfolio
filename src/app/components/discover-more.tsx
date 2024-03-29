"use client";

import { Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Btn } from "../utils/button";

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
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <Heading
            fontSize={{ base: "3.5rem", md: "4.5rem", lg: "5rem" }}
            lineHeight={1.2}
          >
            Letting You Have The Best Content Experience
          </Heading>
        </motion.div>

        <motion.div
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <Text my="3rem" w={{ base: "100%", lg: "70%" }} mx="auto">
            Immerse yourself in a world of unparalleled visual delight as we
            bring you the finest in viewing experiences, ensuring that each
            moment is a celebration of exceptional visual enjoyment.
          </Text>

          <Flex align={"center"} justify={"center"}>
            <Btn
              ClassName="pulse-animate"
              href="https://www.youtube.com/@mildredken7981"
            >
              Discover More
            </Btn>
          </Flex>
        </motion.div>
      </VStack>
    </Flex>
  );
};

export default DiscoverMore;
