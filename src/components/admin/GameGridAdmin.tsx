import { SimpleGrid } from "@chakra-ui/react";
import GameCardSkeleton from "../GameCardSkeleton";
import GameCardContainer from "../GameCardContainer";
import React from "react";
import GameCardAdmin from "./GameCardAdmin";
import useGamesAdmin from "../../adminhook/useGamesAdmin";
import PHPAPICLIENT from "../../api/apiClient";
import axios from "axios";
import GameAdmin from "../../entities/GameAdmin";

const GameGrid = () => {
  const apiClientDelete = new PHPAPICLIENT<number>("/delete_game.php");

  const { data: games, isLoading } = useGamesAdmin();

  const handleDelete = (id: number) => {
    apiClientDelete
      .delete(id, {
        params: {
          gameId: id,
        },
      })
      .then((response) => {
        console.log("Form submission successful", response);
        window.location.reload();
      })
      .catch((error) => {
        // Check for Axios cancellation errors
        if (axios.isCancel(error)) {
          console.log("Request canceled:", error.message);
        } else {
          console.error("Error submitting form", error);
        }
      });
  };

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
            <GameCardAdmin game={game} onDelete={handleDelete} />
          </GameCardContainer>
        </React.Fragment>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
