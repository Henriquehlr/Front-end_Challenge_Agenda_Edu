import axios from "axios";

const apiClient = () => {
  const { REACT_APP_API_BASE_URL } = process.env;

  const axiosIntance = axios.create({
    baseURL: REACT_APP_API_BASE_URL,
    responseType: "json",
  });

  return axiosIntance;
};

export default apiClient;
