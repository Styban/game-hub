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
import useRevenue from "../../adminhook/useRevenue";

const AdminHomePage = () => {
  const { data } = useRevenue();
  const revenue = data ? data[0].total : 0;
  console.log(revenue);

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
              ₱{data ? data[0].total : 0}
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
