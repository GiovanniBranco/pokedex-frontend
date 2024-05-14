import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL;

const client = axios.create({
  baseURL: API_BASE_URL,
});

export { client };
