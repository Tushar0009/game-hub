import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import UsePlatforms, { Platform } from "../hooks/UsePlatforms";

interface Props{
  selectedPlatformId ?: number ;
  onSelectedPlatform: (platform : Platform) => void;
}
const PlatformSelector = ( {onSelectedPlatform , selectedPlatformId} : Props ) => {
    const { data, isLoading, error } = UsePlatforms();
    if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatformId == null ?  'Platforms' : data?.results.find(ele => ele.id === selectedPlatformId)?.name}
      </MenuButton>
      <MenuList>
        {data?.results.map((item) => (
          <MenuItem onClick={() => onSelectedPlatform(item)} value={item.id} key={item.id}>{item.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
