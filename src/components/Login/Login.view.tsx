import React, { FormHTMLAttributes  } from "react";
import AppLink from "@/share/AppLink";
import AuthForm from "@/share/AuthForm";
import { Component } from "@/utils/components";
import { Button, Field, Fields, Title } from "./Login.styles";

type FormProps = FormHTMLAttributes<HTMLFormElement>

const Login: Component<FormProps> = (props) => {
    return (
        <AuthForm {...props}>
            <Title level={2}>Вход</Title>
            <Fields>
                <Field
                    name="login"
                    type="text"
                    label="Логин"
                />
                <Field
                    name="password"
                    type="password"
                    label="Пароль"
                />
            </Fields>
            <Button>Войти</Button>
            <AppLink to="/auth/registration">Нет аккаунта?</AppLink>
        </AuthForm>
    )
};

export default Login;
