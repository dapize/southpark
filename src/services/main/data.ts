import axios, { AxiosInstance } from "axios";

export const apiData: AxiosInstance = axios.create({
  url: import.meta.env.DATA_API,
  timeout: 20000,
  headers: {
    "Content-type": "application/json"
  }
})
