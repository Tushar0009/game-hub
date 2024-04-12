import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T>{
    count: number,
    results: T[]
};

class apiClient<T>{
    endpoint: string;
    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = (config : AxiosRequestConfig) => {
        return axiosInstance.get<FetchResponse<T>>(this.endpoint , config).then(res => res.data);
    }
}
const axiosInstance =  axios.create({
    baseURL : "https://api.rawg.io/api",
    params: {
        key: "ced14a06cece4967aebc4fba4661a8f0"
    }
})
export default apiClient;