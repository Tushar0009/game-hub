import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaAndroid,
  FaLinux,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { Platform } from "../hooks/UsePlatforms";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconArray: { [Key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    linux: FaLinux,
    nintendo: SiNintendo,
    ios: MdPhoneIphone,
    web: BsGlobe,
    mac: FaApple,
    android: FaAndroid,
  };
  return (
    <HStack >
      {platforms.map((ele) => (
          <Icon key={ele.id} as={iconArray[ele.slug] } color='gray.500'/>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
