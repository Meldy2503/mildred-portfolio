'use client'

import { Box, Flex, Heading, Input, Spinner, Text, Textarea, useColorMode } from "@chakra-ui/react";
import React, { useState } from "react";
// import { Title } from "../utils/funcs";
// import { useToast } from "@chakra-ui/react";
import { send } from "@emailjs/browser";
// import { Buttn } from "../button";
import { usePathname } from "next/navigation";
import { AiTwotoneMail } from "react-icons/ai";
import { BiMessageDots } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import InputElement from "./input-field";
import { Btn } from "./utils/button";
import Wrapper from "./utils/wrapper";

interface Props {
  children?: React.ReactNode;
  px?: string | any;
  py?: string;
  shadow?: string;
  icon?: any;
  placeholder?: string;
  type?: string;
  onClose?: () => void;
}

interface UserDetailsProps {
  fullName: string;
  email: string;
  message: string;
}

const ContactSection = ({ children, px, py, shadow, onClose }: Props) => {

  const contactData = [
    {
      icon: BsFillPersonFill,
      placeholder: "Full name",
      type: "text",
      name: "fullName",
    },
    {
      icon: AiTwotoneMail,
      placeholder: "Email",
      type: "email",
      name: "email",
    },
    {
      icon: BiMessageDots,
      placeholder: "Message",
      type: "textarea",
      name: "message",
    },
  ];
  const { colorMode } = useColorMode();
  const path = usePathname();
  // const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [userDetails, setUserDetails] = useState<UserDetailsProps>({
    fullName: "",
    email: "",
    message: "",
  });

  const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();
    if (!userDetails) {
      return;
    }
    const { fullName, email, message } = userDetails;

    try {
      setLoading(true);
      const templateParams = {
        user_name: fullName,
        user_email: email,
        user_message: message,
      };

      await send(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_PUBLIC_KEY!
      );

      // toast({
      //   title: "Success",
      //   description: "Thanks for reaching out, you will get a response soon.",
      //   status: "success",
      //   duration: 5000,
      //   isClosable: true,
      //   position: "top-right",
      // });

      if (onClose) {
        onClose();
      }
    } catch (error) {
      // toast({
      //   title: "Error",
      //   description: "Oops!!! Something went wrong, please try again",
      //   status: "error",
      //   duration: 5000,
      //   isClosable: true,
      //   position: "top-right",
      // });

      console.log("FAILED...", error);
    } finally {
      setLoading(false);
      if (!path.includes("pages")) {
        setTimeout(() => {
          window.location.reload();
        }, 1000); // Reload after 1 second
      }
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

  // const inputLeftElementBg = colorMode === "dark" ? "brand.550" : "brand.320";

  const inputLeftElementBgColor =
    colorMode === "dark" ? "brand.350" : "brand.380";

  const [focusIndex, setFocusIndex] = React.useState(null);

  const handleFocusColor = (index: any) => {
    setFocusIndex(index);
  };

  loading && <Spinner />;

  return (
    <Wrapper bg='brand.300'>
    <Flex justify={'space-between'} gap='2rem' direction={{base: 'column', lg:'row'}}>
      <Box      w={{ base: "100%", lg: "30%" }}
>

      <Heading fontSize={{base: '3.5rem', sm: '4rem', xl: '5rem'}}>I Would Love to Hear from You</Heading>
      <Box h='.5rem' bg='brand.250' borderRadius={'1rem'} mt='1rem'/>
      <Text mt='2rem'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, facilis!</Text>
      </Box>

      <Box
        px={{ base: "2rem", lg: "4rem" }}
        py={'4rem'}
        shadow={shadow}
        bg={"brand.100"}
        transition={"all .5s ease-in"}
        w={{ base: "100%", lg: "65%" }}

       >
         <form onSubmit={handleFormSubmit}>
          {contactData.map((item, index) => {
            return (
              <InputElement
                key={index}
                icon={item.icon}
                type={item.type}
                name={item.name}
                onChange={handleInputChange}
                 as={item.type === "textarea" ? Textarea : Input}
                 h={item.type === "textarea" ? '13rem' : ''}
                 py={item.type === "textarea" ? '1.5rem' : '2.5rem'}
                 mt={item.type === "textarea" ? '-8rem' : ''}
                placeholder={item.placeholder}
                bg={
                  focusIndex === index
                      ? "brand.250"
                      : "brand.300"
                }
                color={
                  focusIndex === index
                      ? "brand.100"
                      : "brand.150"
                }
                onClick={() => handleFocusColor(index)}
              />
            );
          })}

          <Box mt="4rem">
            <Btn loading={loading} type="submit">
              send message
            </Btn>
          </Box>
        </form>
      </Box>
    </Flex>
    </Wrapper>
  );
};

export default ContactSection;