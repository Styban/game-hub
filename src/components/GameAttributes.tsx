import { SimpleGrid, Text } from "@chakra-ui/react";
import DefinitionItems from "./DefinitionItems";
import useGamesPlatform from "../adminhook/useGamesPlatform";
import useGamesGenre from "../adminhook/useGamesGenre";

interface Props {
  gameId: number;
}

const GameAttributes = ({ gameId }: Props) => {
  const { data: platforms } = useGamesPlatform(gameId);
  const { data: genres } = useGamesGenre(gameId);

  return (
    <SimpleGrid columns={2} as="dl">
      <DefinitionItems term="Platforms">
        {platforms?.map((platform) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinitionItems>
      <DefinitionItems term="Genres">
        {genres?.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinitionItems>
    </SimpleGrid>
  );
};

export default GameAttributes;
