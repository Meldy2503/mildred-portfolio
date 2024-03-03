"use client";

import { Box, Flex } from "@chakra-ui/react";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Image from "next/image";
import bgImage from "../assets/hero-img1.svg";

const CanvasComponent = () => {
  return (
    <Flex
      w={{ base: "100%", xl: "60%" }}
      mt={{ base: "2rem", xl: "5rem" }}
      h="50rem"
      position={"relative"}
      align={"center"}
      justify={"center"}
    >
      <Canvas>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={1} />
        <directionalLight position={[3, 2, 1]} />
        <Sphere args={[1, 100, 200]} scale={2.5}>
          <MeshDistortMaterial distort={0.5} speed={2} color={"#ff5621"} />
        </Sphere>
      </Canvas>
      <Box position={"absolute"} top="2rem" mx="auto">
        <Image
          src={bgImage}
          alt="youtube photo"
          width={800}
          height={800}
          style={{
            width: "35rem",
            maxWidth: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
    </Flex>
  );
};

export default CanvasComponent;
