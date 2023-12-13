import { Text, SimpleGrid, Spinner } from "@chakra-ui/react";
import GameCardSkeleton from "../GameCardSkeleton";
import GameCardContainer from "../GameCardContainer";
import React from "react";
import GameCardAdmin from "./GameCardAdmin";
import useGamesAdmin from "../../adminhook/useGamesAdmin";

const GameGrid = () => {
  const { data: games, isLoading } = useGamesAdmin();
  console.log(games);

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={5}
      padding="10px"
    >
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      {games?.map((game, index) => (
        <React.Fragment key={index}>
          <GameCardContainer key={game.id}>
            <GameCardAdmin game={game} />
          </GameCardContainer>
        </React.Fragment>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
