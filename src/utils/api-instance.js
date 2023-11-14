import axios from "axios";

const backendBaseURL = process.env.VUE_APP_API_URL;

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

const success = (res) => res;

const error = (err) => {
  return Promise.reject(err);
};

export const apiInstance = axios.create({
  headers: headers,
  baseURL: backendBaseURL,
});

apiInstance.interceptors.response.use(success, error);

apiInstance.interceptors.request.use(
  function (config) {
    const token = window.localStorage.token;
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
