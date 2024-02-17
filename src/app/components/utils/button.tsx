"use client";
import React from "react";
import { Box } from "@chakra-ui/react";

interface BtnProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  py?: string;
  px?: string;
  fontSize?: string;
  ClassName?: string;
  borderRadius?: string;
}

export const Btn = ({
  children,
  onClick,
  py,
  px,
  fontSize,
  ClassName,
  href,
  borderRadius,
}: BtnProps) => {
  return (
    <Box
      className={ClassName ?? "pulse"}
      zIndex={100}
      cursor="pointer"
      textAlign="center"
      fontSize={fontSize ?? "1.6rem"}
      fontWeight={500}
      transition={"all .3s ease-in"}
      borderRadius={borderRadius ?? "3rem"}
      py={py ?? "1.1rem"}
      px={px ?? "3rem"}
      onClick={onClick}
       bg="brand.550"
      w="fit-content"
      color="brand.100"
      _hover={{
        textDecoration: "none",
        bg: "brand.250",
      }}
      _active={{ transform: "translateY(1px)" }}
    >
      <a href={href} target="_blank">
        {children}
      </a>
    </Box>
  );
};
