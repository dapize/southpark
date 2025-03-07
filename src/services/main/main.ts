import { useUserStore } from "@hooks/user";
import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";

export const apiData: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_DATA_API,
  timeout: 20000,
  headers: {
    "Content-type": "application/json"
  }
})

apiData.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const accessToken = useUserStore.getState().sessionData?.accessToken;
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
})
