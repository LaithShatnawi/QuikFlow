import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_SERVER_URL,
  timeout: 10000
});

export const apiRequest = async (method, url, data = null, config = {}) => {
  try {
    const response = await axiosInstance({
      method,
      url,
      data,
      ...config
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
