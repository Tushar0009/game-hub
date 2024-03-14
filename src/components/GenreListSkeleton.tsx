import { HStack, ListItem, Skeleton ,Card} from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <Card height={'40px'} paddingX={1} paddingY={1}  marginY={4}>
        <HStack>
        <Skeleton height={"32px"} width={'35px'} borderRadius={8}></Skeleton>
        <Skeleton height={'32px'} width={'130px'} borderRadius={6}></Skeleton>
      </HStack>
    </Card>
  );
};

export default GenreListSkeleton;
