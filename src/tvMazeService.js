import axios from "axios";
import router from "@/router/index.js";

const apiClient = axios.create({
  baseURL: `https://api.tvmaze.com/`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    let path = "/error";
    router.push(path);
    return Promise.reject(error);
  }
);
// Api request for all shows
export const getShows = () => apiClient.get(`/shows`);

// Api request to search shows
export const getSearchShows = async (searchText) =>
  apiClient.get(`/search/shows?q=${searchText}`);
