import axios from "axios";
import { AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0",
    withCredentials: true,
    headers: {
        "API-KEY":"80a6766a-e719-4370-ba23-bc01047321d6",
    },
});

export default instance;