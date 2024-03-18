import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSortSelected: (sortSelected: string) => void;
  currentSortOrder: string;
}
const sortSelectorList = [
  { value: "", label: "Relevence" },
  { value: "-added", label: "Date added" },
  { value: "name", label: "Name" },
  { value: "-released", label: "Release date" },
  { value: "-metacritic", label: "Popularity" },
  { value: "-rating", label: "Average rating" },
];
const SortSelector = ({ onSortSelected , currentSortOrder }: Props) => {
  let slectedOrder = sortSelectorList.find(ele => ele.value === currentSortOrder);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by : { slectedOrder?.label || "Relevence" }
      </MenuButton>
      <MenuList>
        {sortSelectorList.map((element) => 
          <MenuItem onClick={() => onSortSelected(element.value)} value={element.value} key={element.value}>{ element.label}</MenuItem>
        )}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
