import axios from "axios";
// import ur from ''

const API = axios.create({ baseURL: "http://localhost:8080/api/v1" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("token")} `;
  }
  return req;
});

export default API;
