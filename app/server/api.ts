import axios from "axios";
import { EXPO_REACT_APP_BASE_URL } from "@env";

export const api = axios.create({
  baseURL: EXPO_REACT_APP_BASE_URL,
});
