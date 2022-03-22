import { api } from "@/utils/http";

export interface ThemeData {
	UserId: number;
	name: string;
}

export class ThemeService {
	static getUserTheme(userId: number) {
		return api.get<ThemeData>(`/api/themes/${userId}`).then((res) => res.data);
	}

	static changeTheme(userId: ThemeData["UserId"], name: ThemeData["name"]) {
		return api
			.post<ThemeData>(`/api/themes`, {
				UserId: userId,
				name,
			})
			.then((res) => res.data);
	}
}
