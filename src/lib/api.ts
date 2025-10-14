import { BASE_URL } from "../constants";
import axios, { AxiosInstance } from "axios";

// Create a function that returns an API instance with the current locale
export const createApiInstance = (locale: string = "az"): AxiosInstance => {
  const apiInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 10_000,
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": locale,
    },
  });

  apiInstance.interceptors.request.use(
    (config) => {
      // Add any auth tokens or other headers here if needed
      // const token = localStorage.getItem('token');
      // if (token) {
      //   config.headers.Authorization = `Bearer ${token}`;
      // }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  apiInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response?.status === 401) {
        console.error("Unauthorized access");
      } else if (error.response?.status === 500) {
        console.error("Server error");
      }
      return Promise.reject(error);
    }
  );

  return apiInstance;
};

// Default instance with "az" locale for backward compatibility
export const api = createApiInstance("az");

export default api;
