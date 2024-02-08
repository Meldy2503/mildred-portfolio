"use client";
import React from "react";
import Link from "next/link";
import { Box, Button } from "@chakra-ui/react";

interface Props {
  href: string;
  children: React.ReactNode;
}
interface BtnProps {
  children: React.ReactNode;
  type?: any;
  loading?: boolean;
  onClick?: () => void;
}

export const BtnLink = ({ href, children }: Props) => {

  return (
    <Link href={href}>
      <Box
        className="pulse"
        textAlign="center"
        fontSize=".8rem"
        fontWeight={"600"}
        px="1rem"
        py=".9rem"
        w="11rem"
        bg="brand.250"
        color="brand.100"
        letterSpacing={".1rem"}
        textTransform={"uppercase"}
        // _hover={{
        //   textDecoration: "none",
        //   bg: colorMode === "dark" ? "yellow.500" : "orange.600",
        // }}
        _active={{ transform: "translateY(1px)" }}
      >
        {children}
      </Box>
    </Link>
  );
};
export const Btn = ({ children, onClick, type, loading }: BtnProps) => {

  return (
    <Button
      className="pulse"
      textAlign="center"
      fontSize="1.5rem"
      fontWeight={"600"}
      borderRadius={"0px"}
      transition={"all .3s ease-in"}
      isLoading={loading}
      px="3rem"
      py="2.5rem"
      type={type}
      onClick={onClick}
      bg="brand.250"
        color="brand.150"
      textTransform={"uppercase"}
      _hover={{
        textDecoration: "none",
        bg:"brand.250"
    }}
      _active={{ transform: "translateY(1px)" }}
    >
      {children}
    </Button>
  );
};
