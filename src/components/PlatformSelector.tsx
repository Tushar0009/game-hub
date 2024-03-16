import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import UsePlatforms from "../hooks/UsePlatforms";

const PlatformSelector = () => {
    const { data, isLoading, error } = UsePlatforms();
    if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Actions
      </MenuButton>
      <MenuList>
        {data.map((item) => (
          <MenuItem value={item.id}>{item.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
