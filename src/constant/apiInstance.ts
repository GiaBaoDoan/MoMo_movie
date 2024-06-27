import axios, { CreateAxiosDefaults, AxiosRequestHeaders } from "axios";
const TOKEN_CYBERSOFT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA0NiIsIkhldEhhblN0cmluZyI6IjIyLzAxLzIyMjQiLCJIZXRIYW5UaW1lIjoiMTcwNTg4MTYwMDAwMCIsIm5iZiI6MTY3ODI5NDgwMCwiZXhwIjoxNzA2MDI5MjAwfQ.YfKHTDXABr_3NwLtG-RXcipukOTa59bdxALcwqyVgiE";

export const apiInstance = (config?: CreateAxiosDefaults) => {
  const api = axios.create(config);
  api.interceptors.request.use((config) => {
    return {
      ...config,
      headers: {
        TokenCyberSoft: TOKEN_CYBERSOFT,
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("USER"))?.accessToken
        }`,
      } as unknown as AxiosRequestHeaders,
    };
  });
  return api;
};
