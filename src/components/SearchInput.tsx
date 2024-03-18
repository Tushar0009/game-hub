import {  Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { IoSearch } from "react-icons/io5";

interface Props{
    onSearch: (searchText : string) => void;
}

const SearchInput = ({onSearch} : Props) => {
    const ref = useRef<HTMLInputElement>(null);
  return (
      <form onSubmit={(e) => {
          e.preventDefault();
          if (ref.current) onSearch(ref.current.value);
    }}>
        <InputGroup>
              <InputLeftElement children ={<IoSearch />} />
          <Input placeholder="Search games" ref={ref} borderRadius={20} variant={"filled"} />
        </InputGroup>
    </form>
  );
};

export default SearchInput;
