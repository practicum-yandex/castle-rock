import axios from "axios";
import { environments } from "./environments";

export const http = axios.create({
	withCredentials: true,
	baseURL: environments.baseUrl
});

export const fullHttp = axios.create({
	withCredentials: true
});