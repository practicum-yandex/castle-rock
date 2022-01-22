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

export class AuthService {
	static signin(data: SigninBody, cb: () => void): (d: any) => void {
		return (dispatch: any): void => {
			http
			.post<string>("/auth/signin", data)
			.then(() => {
				// dispatch(); // зачем вообще это делать через thunk, если у нас ничего ценного не приходит?
				cb();
			})
			.catch((err) => console.log(err));
		}
	}

	static signup(data: SignupBody, cb: () => void): (d: any) => void {
		return (dispatch: any): void => {
			http
			.post<AuthResponse>("/auth/signup", data)
			.then(() => {
				// dispatch(); // зачем вообще это делать через thunk, если у нас ничего ценного не приходит?
				cb();
			})
			.catch((err) => console.log(err));
		}
	}

	static getUser(): (d: any) => void {
		return (dispatch: any): void => {
			http
				.get<UserData>("/auth/user")
				.then((res) => dispatch(setUser(res.data)))
				.catch((err) => console.log(err));
		};
	}

	static logout(cb: () => void): void {
		http
			.post<void>("/auth/logout")
			.then(() => cb())
			.catch((err) => console.log(err));
	}
}