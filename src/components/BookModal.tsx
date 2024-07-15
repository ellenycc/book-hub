import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  Image,
  HStack,
} from "@chakra-ui/react";

interface Props {
  image: string;
  summary: string;
}

const BookModal = ({ image, summary }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button marginTop="auto" onClick={onOpen}>
        Summary
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Summary</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image marginBottom={5} src={image} alt="book thumbnail" />
            <Text>{summary}</Text>
          </ModalBody>

          <ModalFooter marginTop="auto">
            <Button mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default BookModal;
