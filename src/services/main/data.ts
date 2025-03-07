import axios, { AxiosInstance } from "axios";

export const apiData: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_DATA_API,
  timeout: 20000,
  headers: {
    "Content-type": "application/json"
  }
})
