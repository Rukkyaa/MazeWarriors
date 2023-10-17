import axios from "axios";

const backendUrl = "http://localhost:5173/api";

export const axiosInstance = axios.create({
  baseURL: backendUrl,
  headers: {
    "Content-Type": "application/json",
  },
});
