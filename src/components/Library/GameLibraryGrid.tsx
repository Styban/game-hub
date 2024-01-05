import { SimpleGrid } from "@chakra-ui/react";
import GameCardSkeleton from "../GameCardSkeleton";
import GameCardContainer from "../GameCardContainer";
import React from "react";
import GameLibraryCard from "./GameLibraryCard";
import useGameLibrary from "../../adminhook/useGameLibrary";

const GameLibraryGrid = () => {
  const { data: games, isLoading } = useGameLibrary();

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
            <GameLibraryCard game={game} />
          </GameCardContainer>
        </React.Fragment>
      ))}
    </SimpleGrid>
  );
};

export default GameLibraryGrid;
