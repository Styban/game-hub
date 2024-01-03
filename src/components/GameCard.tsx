import {
  Badge,
  Button,
  Card,
  CardBody,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stat,
  StatHelpText,
  StatNumber,
  Text,
  useColorModeValue,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import { Link } from "react-router-dom";
import GameAdmin from "../entities/GameAdmin";
import useGamesPlatform from "../adminhook/useGamesPlatform";
import { MdDownload } from "react-icons/md";
import { FormEvent } from "react";
import PHPAPICLIENT from "../api/apiClient";
import axios from "axios";
interface Props {
  game: GameAdmin;
}

const GameCard = ({ game }: Props) => {
  const apiClient = new PHPAPICLIENT<any>("make_transact.php");

  const toast = useToast();

  const { data: platforms } = useGamesPlatform(game.id);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const downloadColor = useColorModeValue("green.300", "green.100");

  const handlePurchase = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // apiClient
    //   .post("")
    //   .then((response) => {
    //     console.log("Form submission successful", response);
    //   })
    //   .catch((error) => {
    //     // Check for Axios cancellation errors
    //     if (axios.isCancel(error)) {
    //       console.log("Request canceled:", error.message);
    //     } else {
    //       console.error("Error submitting form", error);
    //     }
    //   });

    // Create an example promise that resolves in 5s
    const examplePromise = new Promise((resolve) => {
      setTimeout(() => resolve(60), 1000);
    });

    // Will display the loading toast until the promise is either resolved
    // or rejected.
    toast.promise(examplePromise, {
      success: {
        title: "Paid successfuly",
        description: "Game added to library",
      },
      error: { title: "Payment rejected", description: "Something wrong" },
      loading: { title: "Processing payment", description: "Please wait" },
    });
  };

  return (
    <>
      <Card>
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody>
          <Heading fontSize={"2xl"} marginBottom={3}>
            <Link to={`games/${game.slug}`}>{game.name}</Link>
          </Heading>
          <HStack justifyContent="space-between" marginBottom={3}>
            <PlatformIconList platforms={platforms} />
            <CriticScore score={game.metacritic} />
          </HStack>
          <HStack justifyContent={"space-between"}>
            <Button
              padding={0}
              rightIcon={<MdDownload size={25} />}
              color={downloadColor}
              variant="ghost"
              style={{ width: "auto", fontSize: "20px" }}
              onClick={onOpen}
            >
              Download
            </Button>
            <Badge
              variant="outline"
              fontSize={"20px"}
              as={"u"}
              paddingX={1}
              borderRadius={4}
            >
              ₱{game.price}
            </Badge>
          </HStack>
        </CardBody>
      </Card>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(10deg)"
        />
        <ModalContent bg={"gray.900"}>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handlePurchase}>
            <ModalBody pb={3}>
              <Card>
                <CardBody>
                  <HStack justifyContent={"space-between"}>
                    <Text fontSize={"15px"} as={"kbd"}>
                      {game.name}
                    </Text>
                    <Text fontSize={"15px"} as={"kbd"}>
                      ₱{game.price}
                    </Text>
                  </HStack>
                </CardBody>
              </Card>

              <FormControl mt={4} isRequired>
                <FormLabel>Gcash Number</FormLabel>
                <Input placeholder="09XX-XXX-XXXX" type="number" />
              </FormControl>
            </ModalBody>

            <ModalFooter justifyContent={"center"} mb={1}>
              <Button
                background={"blue.600"}
                colorScheme="facebook"
                color={"white"}
                type="submit"
                style={{
                  width: "70%",
                  fontSize: "15px",
                  height: "30px",
                  borderRadius: 90,
                }}
                onClick={onClose}
              >
                Buy
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export default GameCard;
