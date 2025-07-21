import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://apiserver.sevenuniques.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// ✅ Automatically attach token to all requests 
axiosInstance.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance; 