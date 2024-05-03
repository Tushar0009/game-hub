import UseTrailer from '../hooks/UseTrailer'

interface Props{
    gameId: number;
}
const GameTrailer = ({ gameId }: Props) => {
    const { data, isLoading, error } = UseTrailer(gameId);
    if (isLoading) return null;
    if (error) return null;
    const first = data?.results[0];
    if (!first) return null;
    return (
        <video   src={first?.data[480]} poster={first.preview} controls />
  )
}

export default GameTrailer