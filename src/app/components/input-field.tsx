"use client";

import {
  Icon,
  Input,
  InputGroup,
  InputLeftElement
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
  py,
}: Props) => {
  return (
    <InputGroup mb="3rem">
      <InputLeftElement
        pointerEvents="none"
        h="full"
        p=" 2rem"
        fontSize={"1.8rem"}
        bg={bg}
        color={color}
      >
        <Icon as={icon} mt={mt} />
      </InputLeftElement>
      <Input
        as={as}
        border="1px solid #d8d8d8"
        placeholder={placeholder}
        name={name}
        _placeholder={{ color: "brand.200", fontSize: "1.5rem", mt: "-2rem" }}
        size="lg"
        type={type}
        fontSize={"1.6rem"}
        h={h}
        required
        focusBorderColor="brand.350"
        pl="4.5rem"
        py={py}
        onChange={onChange}
        onClick={onClick}
      />
    </InputGroup>
  );
};

export default InputElement;
