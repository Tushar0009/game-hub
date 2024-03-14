import { useEffect, useState } from "react";
import apiClient from "../service/api-client";
import { CanceledError } from "axios";

interface Genre{
    id: number,
    name : string
}
interface FetchGenreResponse{
    count: number,
    results: Genre[]
}
export const useGenre = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setErrors] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        const controller = new AbortController();
        setIsLoading(true);
        apiClient
            .get<FetchGenreResponse>("/genres", { signal: controller.signal })
            .then((res) => {
                setGenres(res.data.results)
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
    return { genres, error , isLoading};
}