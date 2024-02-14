"use Client";

import React from "react";
import { Box, Text, Flex, Heading, Icon } from "@chakra-ui/react";
import { TfiWrite } from "react-icons/tfi";
import { FiEdit } from "react-icons/fi";
import { RiAdvertisementLine } from "react-icons/ri";
import Image from "next/image";
import Wrapper from "./utils/wrapper";
import star from "./assets/Star7.svg";
import star2 from "./assets/star5.svg";

const Services = () => {
  const data = [
    {
      id: "1",
      icon: <RiAdvertisementLine />,
      title: "Promotional Ads",
      text: "Boost your brand with compelling ads that captivate your audience. Our creative solutions ensure maximum visibility and impact, helping your business stand out.",
    },
    {
      id: "2",
      icon: <FiEdit />,
      title: "Product Review",
      text: "We delve into the features and benefits of your products, providing authentic, unique and informative reviews that resonate with your target audience.",
    },
    {
      id: "3",
      icon: <TfiWrite />,
      title: "Content Creation",
      text: "Ignite your online presence with our dynamic services. From engaging articles to visually appealing multimedia contents, we tailor our creations to suit your brand.",
    },
  ];

  return (
    // <Flex h={"100vh"} bg="brand.100" align={'center'} justify={'center'} px='4rem'>
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
          width: "30rem",
          // height: '100%',
          position: "absolute",
          top: "-10rem",
          right: "-10rem",
        }}
      />
      <Image
        src={star2}
        alt="star image"
        height={800}
        width={800}
        style={{
          maxWidth: "100%",
          objectFit: "cover",
          objectPosition: "center",
          width: "10rem",
          // height: '100%',
          position: "absolute",
          bottom: "2rem",
          left: "25%",
        }}
      />
      <Flex
        justify={"space-between"}
        align={"center"}
        color="brand.200"
        columnGap="2rem"
        rowGap="4rem"
        flexWrap={"wrap"}
      >
        {data.map((card) => {
          return (
            <Box
              key={card.id}
              border="1px solid #4a4a4a"
              w={{ base: "100%", md: "47%", lg: "31%" }}
              p="4rem 3rem"
              bg={card.id === "3" ? "brand.100" : "brand.150"}
              color={card.id === "3" ? "brand.150" : "brand.400"}
              transform={card.id === "3" ? "rotate(4deg)" : "rotate(0deg)"}
              mx="auto"
              // shadow={'lg'}
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
            </Box>
          );
        })}
      </Flex>
    </Wrapper>
  );
};

export default Services;
