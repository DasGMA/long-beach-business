import axios from "axios";

const config = {
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    timeout: 5000,
  },
  baseURL: process.env.REACT_APP_BASE_URL,
};

const axiosInstance = axios.create(config);

axiosInstance.interceptors.request.use(
  async (req) => {
    const token = localStorage.getItem("Token");
    if (!token) return req;
    req.headers.Authorization = `Bearer ${token}`;
    return req;
  },
  (error) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response) {
      if (
        error.response.status === 401 &&
        error.response.data === "Not authorized. Not valid refresh token."
      ) {
        return Promise.reject(error.response.data);
      }

      if (error.response.status === 401 && !originalRequest.__isRetryRequest) {
        originalRequest.__isRetryRequest = true;

        // const response = await axiosInstance.post("/auth/refresh-token");

        // const { jwtToken } = response.data;
        // localStorage.setItem("Token", jwtToken);
        // axios.defaults.headers.common["Authorization"] = `Bearer ${jwtToken}`;
        return axiosInstance(originalRequest);
      }

      if (
        error.response.status === 403 &&
        error.response.statusText === "Forbidden"
      ) {
        return Promise.reject(error.response.data);
      }
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
