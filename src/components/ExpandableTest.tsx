import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}
const ExpandableTest = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  if (!children) return null;
  const limit = 300;
  const setDisc = () => {
    setExpanded(!expanded);
  };
  const summary = expanded ? children : children.substring(0, limit) + "...";
  if (children.length <= 300) return <Text>children</Text>;
  return (
    <Text>
      {summary}
      <Button
        onClick={() => setDisc()}
        size={"xs"}
        fontWeight={"bold"}
        ml={1}
        colorScheme={"yellow"}
      >
        {expanded == true ? "Show less" : "Read More"}
      </Button>
    </Text>
  );
};

export default ExpandableTest;
