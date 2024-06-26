import { Badge } from '@chakra-ui/react'

interface Props{
    score: number;
}
const CriticScore = ({ score }: Props) => {
    let color = score > 75 ? 'green' : score > 60 ? 'yellow' : '';
    return (
        <Badge variant={'outline'} paddingX={2} borderRadius={3} colorScheme={color}>{score}</Badge>
  )
}

export default CriticScore