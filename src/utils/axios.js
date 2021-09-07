import axios from "axios";
import config from "../config";

const instance = axios.create({
  baseURL: config.apiUrl,
  headers: {
    "Access-Control-Allow-Origin": "*",
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  crossdomain: true,
});

export default instance;
