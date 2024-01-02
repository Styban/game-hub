import { ChangeEvent, FormEvent, useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
  Checkbox,
  Wrap,
  WrapItem,
  Heading,
  InputLeftElement,
  InputGroup,
} from "@chakra-ui/react";
import PHPAPICLIENT from "../../api/apiClient";
import axios from "axios";

const GameForm: React.FC = () => {
  const apiClient = new PHPAPICLIENT<any>("add_game.php");

  // State to store form data
  const [formData, setFormData] = useState({
    gameName: "",
    description: "",
    price: 0,
    coverImage: null,
    screenshots: null,
    gameTrailer: null,
    genre: "",
    platform: "",
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);

    // Perform any additional actions with the form data here
    // Send form data using the apiClient instance
    apiClient
      .post({ data: formData })
      .then((response) => {
        console.log("Form submission successful", response);
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

  const handleInputChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { id, value, type } = event.target;

    if (type === "file") {
      const files = (event.target as HTMLInputElement).files;

      // Update form data with the files
      setFormData((prevData) => ({
        ...prevData,
        [id]: files ? files[0].name : null,
      }));
    } else {
      // Update form data for non-file inputs
      setFormData((prevData) => ({
        ...prevData,
        [id]: value,
      }));
    }
  };

  return (
    <Box
      maxW="xl"
      mx="auto"
      mt={8}
      mb={8}
      p={6}
      borderWidth={1}
      borderRadius="md"
    >
      <form onSubmit={handleSubmit}>
        <Heading as={"h2"} textAlign={"center"} mb={4}>
          Game Form
        </Heading>
        <VStack spacing={4} align="stretch">
          <FormControl id="gameName" isRequired>
            <FormLabel>Game Name</FormLabel>
            <Input
              type="text"
              placeholder="Enter game name"
              onChange={handleInputChange}
            />
          </FormControl>

          {/* Description */}
          <FormControl id="description" isRequired>
            <FormLabel>Description</FormLabel>
            <Textarea
              placeholder="Enter game description"
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl id="price" isRequired>
            <FormLabel>Price</FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                color="gray.300"
                fontSize="1.2em"
              >
                ₱
              </InputLeftElement>
              <Input
                placeholder="Enter amount"
                type="number"
                onChange={handleInputChange}
              />
            </InputGroup>
          </FormControl>

          {/* Cover Image Upload */}
          <FormControl id="coverImage">
            <FormLabel>Cover Image</FormLabel>
            <Input
              type="file"
              name="coverImage"
              accept="image/*"
              onChange={handleInputChange}
            />
          </FormControl>

          {/* Screenshots Upload */}
          <FormControl id="screenshots">
            <FormLabel>Game Screenshots</FormLabel>
            <Input
              type="file"
              name="screenshots"
              multiple
              accept="image/*"
              onChange={handleInputChange}
            />
          </FormControl>

          {/* Game Trailer Upload */}
          <FormControl id="gameTrailer">
            <FormLabel>Game Trailer</FormLabel>
            <Input type="file" accept="video/*" onChange={handleInputChange} />
          </FormControl>

          {/* Genre*/}
          <FormControl id="genre">
            <FormLabel>Genre</FormLabel>
            <Wrap spacing={4}>
              {[
                "racing",
                "shooter",
                "adventure",
                "action",
                "rpg",
                "fighting",
                "puzzle",
                "strategy",
                "arcade",
                "simulation",
                "sports",
                "card",
                "family",
                "educational",
                "casual",
                "indie",
                "mmorpg",
                "platformer",
              ].map((genre) => (
                <WrapItem key={genre}>
                  <Checkbox
                    value={genre}
                    onChange={(e) => {
                      handleInputChange(e);
                    }}
                  >
                    {genre}
                  </Checkbox>
                </WrapItem>
              ))}
            </Wrap>
          </FormControl>

          {/* Platform */}
          <FormControl id="platform">
            <FormLabel>Platform</FormLabel>
            <Wrap spacing={4}>
              {[
                "pc",
                "playstation",
                "xbox",
                "ios",
                "mac",
                "linux",
                "nintendo",
                "android",
                "web",
              ].map((value, index) => (
                <WrapItem key={index}>
                  <Checkbox
                    value={value}
                    onChange={(e) => {
                      handleInputChange(e);
                    }}
                  >
                    {value}
                  </Checkbox>
                </WrapItem>
              ))}
            </Wrap>
          </FormControl>

          {/* Submit Button */}
          <Button colorScheme="teal" type="submit">
            Submit
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default GameForm;
