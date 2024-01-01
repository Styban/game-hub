import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
  Checkbox,
  Radio,
  RadioGroup,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

const GameForm: React.FC = () => {
  return (
    <Box maxW="xl" mx="auto" mt={8} p={6} borderWidth={1} borderRadius="md">
      <VStack spacing={4} align="stretch">
        <FormControl id="gameName" isRequired>
          <FormLabel>Game Name</FormLabel>
          <Input type="text" placeholder="Enter game name" />
        </FormControl>

        {/* Description */}
        <FormControl id="description" isRequired>
          <FormLabel>Description</FormLabel>
          <Textarea placeholder="Enter game description" />
        </FormControl>

        {/* Cover Image Upload */}
        <FormControl id="coverImage">
          <FormLabel>Cover Image</FormLabel>
          <Input type="file" accept="image/*" />
        </FormControl>

        {/* Screenshots Upload */}
        <FormControl id="screenshots">
          <FormLabel>Game Screenshots</FormLabel>
          <Input type="file" multiple accept="image/*" />
        </FormControl>

        {/* Game Trailer Upload */}
        <FormControl id="gameTrailer">
          <FormLabel>Game Trailer (Optional)</FormLabel>
          <Input type="file" accept="video/*" />
        </FormControl>

        {/* Genre*/}
        <FormControl id="genre" isRequired>
          <FormLabel>Genre</FormLabel>
          <Wrap spacing={4}>
            <WrapItem>
              <Checkbox value="racing">Racing</Checkbox>
            </WrapItem>
            <WrapItem>
              <Checkbox value="shooter">Shooter</Checkbox>
            </WrapItem>
            <WrapItem>
              <Checkbox value="adventure">Adventure</Checkbox>
            </WrapItem>
            <WrapItem>
              <Checkbox value="action">Action</Checkbox>
            </WrapItem>
            <WrapItem>
              <Checkbox value="rpg">RPG</Checkbox>
            </WrapItem>
            <WrapItem>
              <Checkbox value="fighting">Fighting</Checkbox>
            </WrapItem>
            <WrapItem>
              <Checkbox value="puzzle">Puzzle</Checkbox>
            </WrapItem>
            <WrapItem>
              <Checkbox value="strategy">Strategy</Checkbox>
            </WrapItem>
            <WrapItem>
              <Checkbox value="arcade">Arcade</Checkbox>
            </WrapItem>
            <WrapItem>
              <Checkbox value="simulation">Simulation</Checkbox>
            </WrapItem>
            <WrapItem>
              <Checkbox value="sports">Sports</Checkbox>
            </WrapItem>
            <WrapItem>
              <Checkbox value="card">Card</Checkbox>
            </WrapItem>
            <WrapItem>
              <Checkbox value="family">Family</Checkbox>
            </WrapItem>
            <WrapItem>
              <Checkbox value="educational">Educational</Checkbox>
            </WrapItem>
            <WrapItem>
              <Checkbox value="casual">Casual</Checkbox>
            </WrapItem>
            <WrapItem>
              <Checkbox value="indie">Indie</Checkbox>
            </WrapItem>
            <WrapItem>
              <Checkbox value="mmorpg">Massively Multiplayer</Checkbox>
            </WrapItem>
            <WrapItem>
              <Checkbox value="platformer">Platformer</Checkbox>
            </WrapItem>
          </Wrap>
        </FormControl>

        {/* Platform */}
        <FormControl id="platform" isRequired>
          <FormLabel>Platform</FormLabel>
          <Wrap spacing={4}>
            <WrapItem>
              <Checkbox value="pc">PC</Checkbox>
            </WrapItem>
            <WrapItem>
              <Checkbox value="playstation">PlayStation</Checkbox>
            </WrapItem>
            <WrapItem>
              <Checkbox value="xbox">Xbox</Checkbox>
            </WrapItem>
            <WrapItem>
              <Checkbox value="ios">iOS</Checkbox>
            </WrapItem>
            <WrapItem>
              <Checkbox value="mac">Apple Macintosh</Checkbox>
            </WrapItem>
            <WrapItem>
              <Checkbox value="linux">Linux</Checkbox>
            </WrapItem>
            <WrapItem>
              <Checkbox value="nintendo">Nintendo</Checkbox>
            </WrapItem>
            <WrapItem>
              <Checkbox value="android">Android</Checkbox>
            </WrapItem>
            <WrapItem>
              <Checkbox value="web">Web</Checkbox>
            </WrapItem>
          </Wrap>
        </FormControl>

        {/* Submit Button */}
        <Button colorScheme="teal" type="submit">
          Submit
        </Button>
      </VStack>
    </Box>
  );
};

export default GameForm;
