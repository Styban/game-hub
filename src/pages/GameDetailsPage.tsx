import { useParams } from "react-router-dom";
import { Heading, Spinner, SimpleGrid, GridItem } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameScreenshots from "../components/GameScreenshots";
import useGameAdmin from "../adminhook/useGameAdmin";
import GameTrailer from "../components/GameTrailer";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGameAdmin(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem>
        <Heading as={"h1"}>{game[0].name}</Heading>
        <ExpandableText>{game[0].description}</ExpandableText>
        <GameAttributes gameId={game[0].id} />
      </GridItem>
      <GridItem>
        <GameTrailer
          trailer={game[0].game_trailer}
          poster={game[0].background_image}
        />
        <GameScreenshots gameId={game[0].id} />
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailsPage;
