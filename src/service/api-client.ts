import axios from "axios";

export default axios.create({
    baseURL : "https://api.rawg.io/api",
    params: {
        key: "ced14a06cece4967aebc4fba4661a8f0"
    }
})