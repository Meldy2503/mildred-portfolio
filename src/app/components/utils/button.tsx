"use client";
import React from "react";
import Link from "next/link";
import { Box, Button } from "@chakra-ui/react";
import { px } from "framer-motion";
import { ClassNames } from "@emotion/react";

interface BtnProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  py?: string;
  px?: string;
  fontSize?: string;
  ClassName?: string;
}

export const Btn = ({
  children,
  onClick,
  py,
  px,
  fontSize,
  ClassName,
  href,
}: BtnProps) => {
  return (
    <Box
      className={ClassName ?? "pulse"}
      zIndex={100}
      textAlign="center"
      fontSize={fontSize ?? "1.4rem"}
      fontWeight={"600"}
      transition={"all .3s ease-in"}
      borderRadius={"3rem"}
      py={py ?? "1.3rem"}
      px={px ?? "3rem"}
      onClick={onClick}
      bg="brand.250"
      w='fit-content'
      color="brand.100"
      textTransform={"uppercase"}
      _hover={{
        textDecoration: "none",
        bg: "brand.250",
      }}
      _active={{ transform: "translateY(1px)" }}
    >
      <a href={href}>{children}</a>
    </Box>
  );
};
