import axios from "axios";

export interface FetchResponse<T>{
    count: number,
    results: T[]
}

export default axios.create({
    baseURL : "https://api.rawg.io/api",
    params: {
        key: "ced14a06cece4967aebc4fba4661a8f0"
    }
})