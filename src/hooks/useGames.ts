import { useEffect, useState } from "react";
import apiClient from "../service/api-client";
import { CanceledError } from "axios";

export interface Game {
    id: number;
    name: string;
    background_image : string
  }
  interface FetchGamesResponse {
    count: number;
    results: Game[];
}
  
export const useGame = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setErrors] = useState("");
  
    useEffect(() => {
        const controller = new AbortController();
        apiClient
            .get<FetchGamesResponse>("/games" , {signal : controller.signal})
            .then((res) => setGames(res.data.results))
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setErrors(err.message)
                }
            );
        return () => controller.abort();
    }, []);
    return { games, error };
}