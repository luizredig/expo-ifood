import axios from "axios";

export const api = axios.create({
  baseURL: "http://192.168.90.209:8081",
});
