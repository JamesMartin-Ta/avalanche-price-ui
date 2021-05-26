import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL_API,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default AxiosInstance;
