import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // https://portfolio-backend-13-vzo0.onrender.com
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 50000,
});

export const submitQuery = async (data) => {
  try {
    const res = await api.post("/query", data);
    return res.data;
  } catch (error) {
    // Backend error response
    if (error.response) {
      throw new Error(
        error.response.data?.message || "Server error occurred"
      );
    }

    // Network / timeout error
    if (error.request) {
      throw new Error("Network error. Please try again later.");
    }

    // Unknown error
    throw new Error(error.message || "Something went wrong");
  }
};

export default api;
