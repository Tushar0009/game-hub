import useData from "./useData";

interface Genre{
    id: number,
    name : string
}

export const useGenre = () => useData<Genre>('/genres');