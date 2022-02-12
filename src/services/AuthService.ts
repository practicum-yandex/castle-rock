import { setUser } from "@/store/reducers/user";
import { http } from "@/utils/http";

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
const redirectToYandexID = (id: string): void => {
	location.href = `https://oauth.yandex.ru/authorize?response_type=code&client_id=${id}&redirect_uri=${REDIRECT_URI}`;
}

export class AuthService {
	static signin(data: SigninBody, cb: () => void): (d: any) => void {
		return (): void => {
			http
				.post<string>("/auth/signin", data)
				.then(() => cb())
				.catch((err) => console.log(err));
		};
	}

	static signup(data: SignupBody, cb: () => void): (d: any) => void {
		return (): void => {
			http
				.post<AuthResponse>("/auth/signup", data)
				.then(() => cb())
				.catch((err) => console.log(err));
		};
	}

	static getUser(cb: (err: Error) => void): (d: any) => void {
		return (dispatch: any): void => {
			http
				.get<UserData>("/auth/user")
				.then((res) => dispatch(setUser(res.data)))
				.catch((err) => cb(err));
		};
	}

	static logout(cb: () => void): void {
		http
			.post<void>("/auth/logout")
			.then(() => cb())
			.catch((err) => console.log(err));
	}

	static getAuthorizationCode(): void {
		http
			.get<any>(`/oauth/yandex/service-id?redirect_uri=${REDIRECT_URI}`)
			.then((res) => redirectToYandexID(res.data.service_id))
			.catch((err) => console.log(err));
	}

	static sendAuthCode(code: any, cb: () => void): void {
		http
			.post<any>('/oauth/yandex', { code, redirect_uri: REDIRECT_URI })
			.then(() => cb())
			.catch((err) => console.log(err));
	}
}
