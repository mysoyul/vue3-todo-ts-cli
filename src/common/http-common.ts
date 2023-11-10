import axios, { AxiosInstance } from "axios"

//http://localhost:4500/api
const APIURL = process.env.VUE_APP_APIURL

const apiClient: AxiosInstance = axios.create({
    baseURL: APIURL,
    headers: {
        "Content-type": "application/json",
    },
})
export default apiClient
