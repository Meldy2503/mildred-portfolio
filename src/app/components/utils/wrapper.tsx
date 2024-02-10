import { Box } from "@chakra-ui/react";
import React from "react";

interface Props {
  children: React.ReactNode;
  bg?: string;
  py?: string;
}

const Wrapper = ({ children, bg, py }: Props) => {
  return (
    <Box width="100%" bg={bg ?? "brand.100"} py={py ?? {base: '5rem', md: '10rem'}} position={'relative'}>
      <Box width="95%" maxW={"1280px"} m={"0 auto"}>
        {children}
      </Box>
    </Box>
  );
};

export default Wrapper;
