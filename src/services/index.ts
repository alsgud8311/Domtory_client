import axios from "axios";

export const apiBe = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BE_URL}`,
  timeout: 30_3000,
  withCredentials: true,
});
