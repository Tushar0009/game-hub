import { useEffect, useState } from "react";
import apiClient from "../service/api-client";
import { CanceledError } from "axios";

export interface Platform{
    id: number,
    slug :string,
    name: string,
}
export interface Game {
    id: number;
    name: string;
    background_image: string
    parent_platforms: { platform: Platform }[];
    metacritic: number; 
  }
  interface FetchGamesResponse {
    count: number;
    results: Game[];
}
  
export const useGame = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setErrors] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        const controller = new AbortController();
        setIsLoading(true);
        apiClient
            .get<FetchGamesResponse>("/games", { signal: controller.signal })
            .then((res) => {
                setGames(res.data.results)
                setIsLoading(false)
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setErrors(err.message)
                setIsLoading(false)
                }
            );
        return () => controller.abort();
    }, []);
    return { games, error , isLoading};
}