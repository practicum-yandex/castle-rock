import {  http } from "@/utils/http";
import { redirectToYandexID } from "@/helpers/redirectToYandexID";

export interface AuthResponse {
	id: number;
}

export interface SigninBody {
	login: string;
	password: string;
}

export interface SignupBody {
	first_name: string;
	second_name: string;
	login: string;
	email: string;
	password: string;
	phone: string;
}

export interface UserData {
	id: number;
	first_name: string;
	second_name: string;
	display_name: string;
	login: string;
	email: string;
	phone: number;
	avatar: string;
}

const REDIRECT_URI = location.origin;

export class AuthService {
	static signin(data: SigninBody): Promise<string> {
		return http.post<string>("/auth/signin", data).then((res) => res.data);
	}

	static signup(data: SignupBody): Promise<AuthResponse> {
		return http
			.post<AuthResponse>("/auth/signup", data)
			.then((res) => res.data);
	}

	static logout(): Promise<void> {
		return http.post<void>("/auth/logout").then();
	}

	static getUser(): Promise<UserData> {
		return http.get<UserData>("/auth/user").then((res) => res.data);
	}

	static getAuthorizationCode(): Promise<any> {
		return http
			.get<any>(`/oauth/yandex/service-id?redirect_uri=${REDIRECT_URI}`)
			.then((res) => redirectToYandexID(res.data.service_id))
			.catch((err) => console.log(err));
	}

	static sendAuthCode(code: any): Promise<any> {
		return http.post<any>("/oauth/yandex", { code, redirect_uri: REDIRECT_URI });
	}
}
