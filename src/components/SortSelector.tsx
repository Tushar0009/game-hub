import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../service/store";

const sortSelectorList = [
  { value: "", label: "Relevence" },
  { value: "-added", label: "Date added" },
  { value: "name", label: "Name" },
  { value: "-released", label: "Release date" },
  { value: "-metacritic", label: "Popularity" },
  { value: "-rating", label: "Average rating" },
];
const SortSelector = () => {
  const setSortOrder = useGameQueryStore((s) => s.setSortOrder);
  const sortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);

  let currentSortOrder = sortSelectorList.find(
    (ele) => ele.value === sortOrder
  );
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by : {currentSortOrder?.label || "Relevence"}
      </MenuButton>
      <MenuList>
        {sortSelectorList.map((element) => (
          <MenuItem
            onClick={() => setSortOrder(element.value)}
            value={element.value}
            key={element.value}
          >
            {element.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
