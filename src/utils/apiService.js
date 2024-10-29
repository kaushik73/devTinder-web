import axios from "axios";
import { BASE_URL } from "./constants";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

const handleError = (error) => {
  console.error("API Error:", error);
  return (
    error.response?.data?.message ||
    "An unexpected error occurred. Please try again."
  );
};

const apiService = {
  getConnections: async () => {
    try {
      const res = await axiosInstance.get("/user/connections");
      return res.data;
    } catch (error) {
      throw handleError(error);
    }
  },

  getReceivedRequests: async () => {
    try {
      const res = await axiosInstance.get("/user/request/recieved");
      return res.data;
    } catch (error) {
      throw handleError(error);
    }
  },

  sendRequest: async (status, userId) => {
    try {
      const res = await axiosInstance.post(
        `/request/send/${status}/${userId}`,
        {}
      );
      return res.data;
    } catch (error) {
      throw handleError(error);
    }
  },

  reviewRequest: async (status, requestId) => {
    try {
      const res = await axiosInstance.post(
        `/request/review/${status}/${requestId}`,
        {}
      );
      return res.data;
    } catch (error) {
      throw handleError(error);
    }
  },
};

export default apiService;
