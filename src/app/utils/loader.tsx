"use client";

import { Center } from "@chakra-ui/react";
import Image from "next/image";
import loadingIcon from "../assets/load-icon1.svg";

const LoadingIcon = () => {
  return (
    <Center h="100vh">
      <Image src={loadingIcon} height={80} width={80} alt="loading icon" />
    </Center>
  );
};

export default LoadingIcon;
