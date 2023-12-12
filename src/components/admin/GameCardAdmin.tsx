import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import Game from "../../entities/Game";
import CriticScore from "../CriticScore";
import getCroppedImageUrl from "../../services/image-url";
interface Props {
  game: Game;
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
          <CriticScore score={game.metacritic} />
        </HStack>
        <HStack justifyContent="space-between" marginBottom={3}>
          <Text>Revenue:</Text>
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCardAdmin;
