import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import usePlatfroms from "../hooks/usePlatforms";
import { BsChevronBarDown, BsChevronDown } from "react-icons/bs";
import { Platform } from "../services/platformsService";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatformId?: number;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatformId }: Props) => {
  const { data, error } = usePlatfroms();

  if (error) return null;

  const platform = data.results.find(
    (platform) => platform.id === selectedPlatformId
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((item) => (
          <MenuItem key={item.id} onClick={() => onSelectPlatform(item)}>
            {item.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
