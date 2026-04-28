import axios from "axios";

const API = axios.create({
  baseURL: "https://fsad-project-backend-production-4e9a.up.railway.app/api"
});

export default API;
