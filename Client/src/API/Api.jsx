import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 50000,
});

export const submitQuery = async (data) => {
  const res = await api.post("/query", data);
  return res.data;
};

