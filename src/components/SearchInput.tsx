import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { IoSearch } from "react-icons/io5";
import useGameQueryStore from "../service/store";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const ref = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) {
          setSearchText(ref.current.value);
          navigate("/");
        }
      }}
    >
      <InputGroup>
        <InputLeftElement children={<IoSearch />} />
        <Input
          placeholder="Search games"
          ref={ref}
          borderRadius={20}
          variant={"filled"}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
