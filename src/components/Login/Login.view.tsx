import React from "react";
import AppLink from "@/share/AppLink";
import AuthForm from "@/share/AuthForm";
import { CustomButton, CustomField, CustomFields, CustomTitle } from "./Login.styles";

const Login: React.FC = () => {
    return (
        <AuthForm>
            <CustomTitle level={2}>Вход</CustomTitle>
            <CustomFields>
                <CustomField 
                    type="text"
                    label="Логин"
                />
                <CustomField 
                    type="password"
                    label="Пароль"
                />
            </CustomFields>
            <CustomButton>Войти</CustomButton>
            <AppLink to="/auth/registration">Нет аккаунта?</AppLink>
        </AuthForm>
    )
};

export default Login;
