import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Skeleton,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Btn } from "./button";

interface Props {
  src: string;
  triggerBtn: any;
}

export const VideoModal = ({ src, triggerBtn }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box onClick={onOpen} cursor={"pointer"}>
        {triggerBtn}
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} isCentered size="6xl">
        <ModalOverlay bg="brand.500" />
        <ModalContent py="2rem" px={{ base: "1rem", md: "2rem" }}>
          <ModalCloseButton />
          <ModalBody>
            <Skeleton isLoaded>
              <iframe
                width={"100%"}
                height={350}
                src={src}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </Skeleton>

            <Text mt=".5rem" color="brand.550">
              #MildredKen #YouTube #FunnyVideos
            </Text>
            <Text mt="2rem">
              Embark on a laughter-filled journey as you brace yourself for
              scenes that unravel the comedic tapestry of familial dynamics in
              most African households and family life in general.
            </Text>
          </ModalBody>

          <ModalFooter mt="2rem">
            <Button
              colorScheme="gray"
              mr={"1.5rem"}
              onClick={onClose}
              p="2rem"
              borderRadius=".5rem"
              fontSize={"1.6rem"}
            >
              Close
            </Button>
            <Btn
              href="https://www.youtube.com/@mildredken7981"
              ClassName="modalbtn"
              borderRadius=".5rem"
              py=".9rem"
              px="2rem"
            >
              Watch More
            </Btn>{" "}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
