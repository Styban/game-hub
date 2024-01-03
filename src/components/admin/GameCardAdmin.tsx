import {
  Badge,
  Button,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import CriticScore from "../CriticScore";
import getCroppedImageUrl from "../../services/image-url";
import GameAdmin from "../../entities/GameAdmin";
import { MdBuild, MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";

interface Props {
  game: GameAdmin;
  onDelete: (id: number) => void;
  onUpdate: (game: GameAdmin) => void;
}

const GameCardAdmin = ({ game, onDelete, onUpdate }: Props) => {
  const navigate = useNavigate();

  const deleteColor = useColorModeValue("red.200", "red.100");
  const updateColor = useColorModeValue("yellow.300", "yellow.500");

  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize={"2xl"} marginBottom={4}>
          {game.name}
        </Heading>
        <HStack justifyContent="space-between" marginBottom={3}>
          <Text>Downloads:</Text>
          <CriticScore score={game.downloads} />
        </HStack>
        <HStack justifyContent="space-between" marginBottom={3}>
          <Text>Price:</Text>
          <Badge fontSize="14px" paddingX={2} borderRadius="4px" colorScheme="">
            {game.price}
          </Badge>
        </HStack>
        <HStack justifyContent="space-between" marginBottom={3}>
          <Text>Revenue:</Text>
          <Badge
            fontSize="14px"
            paddingX={2}
            borderRadius="4px"
            variant="outline"
            colorScheme="yellow"
          >
            ₱{(game.price * game.downloads).toLocaleString()}
          </Badge>
        </HStack>
        <Stack direction="row" justifyContent={"space-evenly"}>
          <Button
            rightIcon={<MdBuild />}
            color={updateColor}
            variant="ghost"
            size={"lg"}
            onClick={() => {
              onUpdate(game);
              navigate(`games/${game.slug}`);
            }}
          >
            Edit
          </Button>
          <Button
            leftIcon={<MdDelete />}
            color={deleteColor}
            variant="ghost"
            size={"lg"}
            onClick={() => onDelete(game.id)}
          >
            Delete
          </Button>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default GameCardAdmin;
