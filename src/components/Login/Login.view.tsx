import React, { FormHTMLAttributes  } from "react";
import AppLink from "@/share/AppLink";
import AuthForm from "@/share/AuthForm";
import { Component } from "@/utils/components";
import { CustomButton, CustomField, CustomFields, CustomTitle } from "./Login.styles";

type FormProps = FormHTMLAttributes<HTMLFormElement>

const Login: Component<FormProps> = (props) => {
    return (
        <AuthForm {...props}>
            <CustomTitle level={2}>Вход</CustomTitle>
            <CustomFields>
                <CustomField
                    name="login"
                    type="text"
                    label="Логин"
                />
                <CustomField
                    name="password"
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
