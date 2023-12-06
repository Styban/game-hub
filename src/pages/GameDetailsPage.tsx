import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Center, Heading, Spinner, VStack } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <Center>
      <VStack>
        <Heading as={"h1"}>{game.name}</Heading>
        <ExpandableText>{game.description_raw}</ExpandableText>
      </VStack>
    </Center>
  );
};

export default GameDetailsPage;
