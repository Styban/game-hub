import {
  Grid,
  Show,
  GridItem,
  Flex,
  Box,
  Heading,
  Text,
  Badge,
} from "@chakra-ui/react";
import GenreList from "../../components/GenreList";
import PlatformSelector from "../../components/PlatformSelector";
import GameGridAdmin from "../../components/admin/GameGridAdmin";

const AdminHomePage = () => {
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
          <Heading as="h1" marginY={2} fontSize="5xl">
            Seller Dashboard
          </Heading>
          <Text fontSize="lg" marginBottom={4}>
            Total Revenue -{" "}
            <Badge variant="outline" fontSize={"lg"}>
              ₱1,000,000,000
            </Badge>
          </Text>
          <Flex marginBottom={5}>
            <PlatformSelector />
          </Flex>
        </Box>
        <GameGridAdmin />
      </GridItem>
    </Grid>
  );
};

export default AdminHomePage;
