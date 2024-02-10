'use client'


import React from "react";
import {
    Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  useColorMode,
} from "@chakra-ui/react";

interface Props {
  icon?: any;
  placeholder?: string;
  type?: string;
  color?: any;
  bg?: any;
  onClick?: any;
  onChange?: any;
  as?: any;
  name?: string;
  h?: string;
  py?: string;
  mt?: string;
}

const InputElement = ({
  icon,
  placeholder,
  type,
  name,
  bg,
  color,
  onClick,
  onChange,
  as,
  h,
  mt,
  py
}: Props) => {
  const { colorMode } = useColorMode();
  return (
    <InputGroup
      mb="2rem"
      >
        {/* <Flex> */}
      <InputLeftElement
        pointerEvents="none"
        h="full"
        p=" 2rem"
        fontSize={'1.8rem'}
        bg={bg}
        color={color}

        >
        <Icon as={icon} mt={mt}/>
      </InputLeftElement>
      <Input
        as={as}
        // bg={colorMode === "dark" ? "brand.700" : "brand.250"}
        border='1px solid #d8d8d8'
        placeholder={placeholder}
        name={name}
        _placeholder={{ color: "brand.200", fontSize: "1.5rem", mt: "-2rem" }}
        size="lg"
        type={type}
        fontSize={'1.6rem'}
        h={h}
        required
        focusBorderColor="brand.350"
        pl="4.5rem"
        py={py}
        onChange={onChange}
        onClick={onClick}
      />
      {/* </Flex> */}
    </InputGroup>
  );
};

export default InputElement;
