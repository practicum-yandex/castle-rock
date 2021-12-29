import React, { FormEvent, useState } from "react";
import { AuthPage } from "./Auth.styles";
import Registration from "@/components/Registration";
import Login from "@/components/Login";
import { useNavigate, useParams } from "react-router-dom";
import { getFormValues } from "@/helpers/getFormValues";
import authService from "@/services/AuthService";
import { AuthResponse } from "@/models/Auth";

enum AUTH_ID {
    Login = 'login',
    Registration = 'registration'
}

const Auth: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [ , setUserId] = useState<number>();
    const [ , setUserState] = useState<boolean>(false);

    function signup(event: FormEvent): void {
        event.preventDefault();
        const formEl = event.target as HTMLFormElement;
    
        authService.signup(getFormValues(formEl), updateUserId);
    }

    function signin(event: FormEvent): void {
        event.preventDefault();
        const formEl = event.target as HTMLFormElement;
    
        authService.signin(getFormValues(formEl), updateUserState);
    }

    function updateUserId(data: AuthResponse) {
        if (data) {
            setUserId(data.id);
            navigate("/", { replace: true });
        }
    }

    function updateUserState(data: string) {
        if (data === 'OK') {
            setUserState(true);
            navigate("/", { replace: true });
        }
    }

    return (
        <AuthPage>
            {
                id === AUTH_ID.Login 
                    ? <Login onSubmit={signin}/> 
                    : <Registration onSubmit={signup}/>
            }
        </AuthPage>
    )
};

export default Auth;
