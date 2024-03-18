import { Icon, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { IoSearch } from "react-icons/io5";

const SearchInput = () => {
  return (
    <InputGroup>
          <InputLeftElement children ={<IoSearch />} />
      <Input placeholder="Search games" borderRadius={20} variant={"filled"} />
    </InputGroup>
  );
};

export default SearchInput;
