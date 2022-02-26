import React, { FormHTMLAttributes } from "react";
import AppLink from "@/share/AppLink";
import AuthForm from "@/share/AuthForm";
import { Component } from "@/utils/components";
import { Button, Field, Fields, Title } from "./Login.styles";
import { AuthService } from "@/services/AuthService";
import { useDispatch } from "react-redux";

type FormProps = FormHTMLAttributes<HTMLFormElement>;

const Login: Component<FormProps> = (props) => {
	const auth = AuthService;
	const dispatch = useDispatch();

	const loginWithOAuth = () => {
		auth.getServiceId((data) => {
			console.log(data.service_id)
			auth.getOAuthCode(data.service_id, (code) => {
				console.log(code)
				auth.sendAuthCode(code, () => {
					console.log('finish')
					dispatch(AuthService.getUser());
				})
			})
		})
	}

	return (
		<AuthForm {...props}>
			<Title level={2}>Вход</Title>
			<Fields>
				<Field name="login" type="text" label="Логин" />
				<Field name="password" type="password" label="Пароль" />
			</Fields>
			<Button>Войти</Button>
			<Button onClick={loginWithOAuth} type="button">C помощью Яндекс</Button>
			<AppLink to="/auth/registration">Нет аккаунта?</AppLink>
		</AuthForm>
	);
};

export default Login;
