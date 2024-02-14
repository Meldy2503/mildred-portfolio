"use client";

import { useState, useEffect } from "react";

import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  Flex,
  HStack,
  Icon,
  Text,
  useDisclosure
} from "@chakra-ui/react";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentMenu, setCurrentMenu] = useState("#home");
  const handlecurrentMenu = (link: string) => {
    setCurrentMenu(link);
  };

  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuData = [
    {
      name: "Home",
      id: "#home",
    },
    {
      name: "About me",
      id: "#about",
    },
    {
      name: "Services",
      id: "#services",
    },

    {
      name: "Contact me",
      id: "#contact",
    },
  ];
  return (
    // <Box w="100%" py="1.2rem" position={'fixed'} top={'0px'} zIndex={500}>
     <Box w="100%" py="1.2rem" position={'fixed'} top={'0px'}        bg={scrolled ? "brand.150" : "transparent"}
     zIndex={500} > 
      <Flex
        w="95%"
        maxW={"1280px"}
        mx="auto"
        justify={"space-between"}
        align={"center"}
        color="brand.100"
      >
        <HStack>
          <FaPlay
            style={{
              fontSize: "3.5rem",
              color: "#ff5621",
              cursor: "pointer",
            }}
          />
          <Text fontSize={{ base: "2.5rem", md: "3rem" }} fontWeight={"800"}>
            Mildred
          </Text>
        </HStack>
        <Flex gap="3rem" display={{ base: "none", md: "flex" }}>
          {menuData.map((link) => {
            return (
              <Box
                key={link.id}
                fontWeight={"600"}
                color={currentMenu === link.id ? "brand.250" : "brand.100"}
                onClick={() => {
                  handlecurrentMenu(link.id);
                }}
              >
                <Link href={link.id}>{link.name}</Link>
              </Box>
            );
          })}
        </Flex>
        <Box onClick={onOpen} display={{ base: "block", md: "none" }}>
          <Icon
            as={isOpen ? AiOutlineClose : GiHamburgerMenu}
            boxSize={12}
            cursor={"pointer"}
          />
        </Box>
      </Flex>
      <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
        <DrawerContent
          mt="6rem"
          transition={"all .2s linear"}
          pb="3rem"
          pt="1rem"
          bg='brand.150'
        >
          <DrawerBody>
            <Flex direction="column" rowGap={"3rem"} align={"center"} mt="2rem" >
              {menuData.map((menu) => {
                return (
                  <Box
                    fontWeight={"600"}
                    key={menu.id}
                    border="none"
                    color={currentMenu === menu.id ? "brand.250" : "brand.100"}
                  >
                    <Link
                      href={menu.id}
                      onClick={() => {
                        handlecurrentMenu(menu.id);
                        onClose();
                      }}
                    >
                      {menu.name}
                    </Link>
                  </Box>
                );
              })}
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;


