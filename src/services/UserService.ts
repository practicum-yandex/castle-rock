import { http } from "@/utils/http";
import { UserData } from "./AuthService";

export interface ChangePasswordRequest {
    oldPassword: string,
    newPassword: string
} 

export class UserService {
    static changePassword(data: ChangePasswordRequest, cb: (data: string) => void): void {
        http.put<string>('/user/password', data)
            .then((res) => cb(res.data)) 
            .catch((err) => console.log(err))   
    }

    static changeAvatar(data: FormData, cb: (data: UserData) => void): void {
        http.put<UserData>('/user/profile/avatar', data)
            .then((res) => cb(res.data)) 
            .catch((err) => console.log(err))
    }
}
