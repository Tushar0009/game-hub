import { useGenre } from "../hooks/useGenres"

const GenreList = () => {
    const {data} = useGenre()
  return (
      <ul>
          {data.map(item => <li value={item.id}>{item.name}</li>)}
    </ul>
  )
}

export default GenreList