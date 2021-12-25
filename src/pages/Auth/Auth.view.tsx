import React from "react";
import { AuthPage } from "./Auth.styles";
import Registration from "@/components/Registration";
import Login from "@/components/Login";
import { useParams } from "react-router-dom";

enum AUTH_ID {
    Login = 'login',
    Registration = 'registration'
}

const Auth: React.FC = () => {
    const { id } = useParams()

    return (
        <AuthPage>
            {
                id === AUTH_ID.Login 
                    ? <Login/> 
                    : <Registration/>
            }
        </AuthPage>
    )
};

export default Auth;
