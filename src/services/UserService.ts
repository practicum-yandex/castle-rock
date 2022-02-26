import { setUser } from "@/store/reducers/user";
import { http } from "@/utils/http";
import { UserData } from "./AuthService";

export interface ChangePasswordRequest {
	oldPassword: string;
	newPassword: string;
}

export class UserService {
	static changePassword(
		data: ChangePasswordRequest,
		cb: () => void
	): (d: any) => void {
		return (): void => {
			http
				.put<string>("/user/password", data)
				.then(() => cb())
				.catch((err) => console.log(err));
		};
	}

	static changeAvatar(data: FormData): (d: any) => void {
		return (dispatch: any): void => {
			http
				.put<UserData>("/user/profile/avatar", data)
				.then((res) => dispatch(setUser(res.data)))
				.catch((err) => console.log(err));
		};
	}
}
