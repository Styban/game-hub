import { Grid, Show, GridItem, Flex, Box } from "@chakra-ui/react";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import GameLibraryGrid from "../components/Library/GameLibraryGrid";

const LibraryPage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside">
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft="10px">
          <GameHeading />
          <Flex marginBottom={5}>
            <PlatformSelector />
          </Flex>
        </Box>
        <GameLibraryGrid />
      </GridItem>
    </Grid>
  );
};

export default LibraryPage;
