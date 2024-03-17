import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import UsePlatforms from "../hooks/UsePlatforms";
import { Platform } from "../hooks/useGames";

interface Props{
  selectedPlatform: Platform | null;
  onSelectedPlatform: (platform : Platform) => void;
}
const PlatformSelector = ( {onSelectedPlatform , selectedPlatform} : Props ) => {
    const { data, isLoading, error } = UsePlatforms();
    if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform == null ?  'Platforms' : selectedPlatform.name}
      </MenuButton>
      <MenuList>
        {data.map((item) => (
          <MenuItem onClick={() => onSelectedPlatform(item)} value={item.id}>{item.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
