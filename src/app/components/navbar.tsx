"use client";

import { useEffect, useState } from "react";

import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  Flex,
  HStack,
  Icon,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { menuData } from "./utils/constants";

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

  return (
    <Box
      w="100%"
      py="1.5rem"
      position={"fixed"}
      top={"0px"}
      bg={scrolled ? "brand.150" : "transparent"}
      zIndex={500}
    >
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
              fontSize: "3rem",
              color: "#ff5621",
              cursor: "pointer",
            }}
          />
          <Text fontSize={{ base: "2rem", md: "2.5rem" }} fontWeight={"800"}>
            Mildred
          </Text>
        </HStack>
        <Flex gap="3rem" display={{ base: "none", md: "flex" }}>
          {menuData.map((link) => {
            return (
              <Box
                key={link.id}
                color={currentMenu === link.id ? "brand.250" : "brand.100"}
                _hover={{
                  color: 'brand.250'
                }}
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
        <DrawerContent mt="6rem" pb="3rem" pt="1rem" bg="brand.150">
          <DrawerBody>
            <Flex direction="column" rowGap={"3rem"} align={"center"} mt="2rem">
              {menuData.map((menu) => {
                return (
                  <Box
                    key={menu.id}
                    border="none"
                    _hover={{
                      color: 'brand.250'
                    }}
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
