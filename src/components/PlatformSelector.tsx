import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import UsePlatforms, { Platform } from "../hooks/UsePlatforms";
import usePlatofrm from "../hooks/usePlatform";
import useGameQueryStore from "../service/store";

const PlatformSelector = () => {
  const setPlatformId = useGameQueryStore((s) => s.setPlatformId);
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const { data , error } = UsePlatforms();
  const platform = usePlatofrm(platformId);
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platformId == null ? "Platforms" : platform?.name}
      </MenuButton>
      <MenuList>
        {data?.results.map((item: Platform) => (
          <MenuItem
            onClick={() => setPlatformId(item.id)}
            value={item.id}
            key={item.id}
          >
            {item.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
