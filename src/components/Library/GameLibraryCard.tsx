import {
  Button,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import PlatformIconList from "../PlatformIconList";
import CriticScore from "../CriticScore";
import getCroppedImageUrl from "../../services/image-url";
import { Link } from "react-router-dom";
import GameAdmin from "../../entities/GameAdmin";
import useGamesPlatform from "../../adminhook/useGamesPlatform";
import { MdDownload } from "react-icons/md";
import PHPAPICLIENT from "../../api/apiClient";
import axios from "axios";
interface Props {
  game: GameAdmin;
}

const GameCard = ({ game }: Props) => {
  const toast = useToast();

  const { data: platforms } = useGamesPlatform(game.id);

  const downloadColor = useColorModeValue("green.300", "green.100");

  const handleDownload = (name: string) => {
    const examplePromise = new Promise((resolve) => {
      setTimeout(() => resolve(60), 2000);
    });

    // Will display the loading toast until the promise is either resolved
    // or rejected.
    toast.promise(examplePromise, {
      success: {
        title: "Game Downloaded",
        description: `${name}`,
      },
      error: { title: "Download Failed", description: "Something went wrong" },
      loading: { title: "Downloading", description: "Please wait..." },
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
          <HStack justifyContent={"center"}>
            <Button
              padding={0}
              rightIcon={<MdDownload size={25} />}
              color={downloadColor}
              variant="ghost"
              style={{ width: "auto", fontSize: "20px" }}
              onClick={() => handleDownload(game.name)}
            >
              Download
            </Button>
          </HStack>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
