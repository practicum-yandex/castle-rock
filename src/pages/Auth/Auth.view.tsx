import React, { FormEvent, useCallback } from "react";
import { AuthPage } from "./Auth.styles";
import Registration from "@/components/Registration";
import Login from "@/components/Login";
import { useNavigate, useParams } from "react-router-dom";
import { getFormValues } from "@/helpers/getFormValues";
import authService from "@/services/AuthService";
import { AuthResponse } from "@/models/Auth";

enum AUTH_ID {
    Login = 'Login',
    Registration = 'Registration'
}

const Auth: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const signup = useCallback((event: FormEvent) => {
        event.preventDefault();
        const formEl = event.target as HTMLFormElement;
    
        authService.signup(getFormValues(formEl), updateUserId);
    }, [])

    const signin = useCallback((event: FormEvent) => {
        event.preventDefault();
        const formEl = event.target as HTMLFormElement;
    
        authService.signin(getFormValues(formEl), updateUserState);
    }, [])

    function updateUserId(data: AuthResponse) {
        if (data) {
            navigate("/", { replace: true });
        }
    }

    function updateUserState(data: string) {
        if (data === 'OK') {
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
