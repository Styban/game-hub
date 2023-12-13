import {
  Badge,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import CriticScore from "../CriticScore";
import getCroppedImageUrl from "../../services/image-url";
import GameAdmin from "../../entities/GameAdmin";
interface Props {
  game: GameAdmin;
}

const GameCardAdmin = ({ game }: Props) => {
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
      </CardBody>
    </Card>
  );
};

export default GameCardAdmin;
