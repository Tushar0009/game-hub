import { useEffect, useState } from "react";
import apiClient from "../service/api-client";
import { CanceledError } from "axios";
import useData from "./useData";

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
export const useGame = () => useData<Game>('/games');