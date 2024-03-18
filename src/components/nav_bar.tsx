import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo_final.png";
import ColorModeSwitch from "./colorModeSwitch";
import SearchInput from "./SearchInput";

interface Props{
  onSearch: (searchText : string) => void;
}
const NavBar = ({onSearch} : Props) => {
  return (
    <HStack  padding={"10px"}>
      <Image boxSize="60px" src={logo}></Image>
      <SearchInput onSearch={onSearch}/>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;
