import { useGenre } from "../hooks/useGenres"

const GenreList = () => {
    const {genres} = useGenre()
  return (
      <ul>
          {genres.map(item => <li value={item.id}>{item.name}</li>)}
    </ul>
  )
}

export default GenreList