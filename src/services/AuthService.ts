import axios from "axios";
import { environments } from "@/utils/environments";
import { AuthResponse, SigninBody, SignupBody, UserBody } from "@/models/Auth";

export class AuthService {
    signin(data: SigninBody, cb: (data: AuthResponse) => void): void {
        axios.post<AuthResponse>(`${environments.baseUrl}/auth/signin`, data)
        .then((res) => cb(res.data)) 
        .catch((err) => console.log(err))   
    }

    signup(data: SignupBody, cb: (data: AuthResponse) => void): void {
        axios.post<AuthResponse>(`${environments.baseUrl}/auth/signup`, data)
            .then((res) => cb(res.data)) 
            .catch((err) => console.log(err))
    }

    getUser(cb: (data: UserBody) => void): void {
        axios.get<UserBody>(`${environments.baseUrl}/auth/user`)
            .then((res) => cb(res.data)) 
            .catch((err) => console.log(err))
    }

    logout(cb: () => void): void {
        axios.post<void>(`${environments.baseUrl}/auth/logout`)
            .then(() => cb()) 
            .catch((err) => console.log(err))
    }
}
