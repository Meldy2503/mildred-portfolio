import { Box } from "@chakra-ui/react";
import React from "react";

interface Props {
  children: React.ReactNode;
  bg?: string;
  py?: string;
  id?: string;
  ref?: any;
}

const Wrapper = ({ children, bg, py, id, ref }: Props) => {
  return (
    <Box
      ref={ref}
      width="100%"
      bg={bg ?? "brand.100"}
      py={py ?? { base: "5rem", md: "10rem" }}
      position={"relative"}
      id={id}
    >
      <Box width="95%" maxW={"1280px"} m={"0 auto"}>
        {children}
      </Box>
    </Box>
  );
};

export default Wrapper;
