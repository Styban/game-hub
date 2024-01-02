import { useMutation } from "@tanstack/react-query";
import PHPAPICLIENT from "../api/apiClient";
import { Axios, AxiosRequestConfig } from "axios";

const apiClient = new PHPAPICLIENT<number>("/delete_game.php");

const useGameDelete = () => {
  const deleteGameMutation = useMutation(apiClient.delete);

  const deleteGame = async (id: number, config?: AxiosRequestConfig) => {
    try {
      // Use the mutation function to delete the game
      await deleteGameMutation.mutateAsync({ id, config });
    } catch (error) {
      // Handle errors if needed
      console.error("Error deleting game", error);
    }
  };

  return {
    deleteGame,
    isLoading: deleteGameMutation.isLoading,
  };
};

export default useGameDelete;
