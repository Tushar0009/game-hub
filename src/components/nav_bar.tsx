import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo_final.png";
import ColorModeSwitch from "./colorModeSwitch";
import SearchInput from "./SearchInput";
import { Link, Navigate } from "react-router-dom";
const NavBar = () => {
  return (
    <HStack padding={"10px"}>
      <Link to={"/"}>
        <Image boxSize="60px" src={logo} cursor={"pointer"} objectFit={"cover"}></Image>
      </Link>
      <SearchInput />
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;
