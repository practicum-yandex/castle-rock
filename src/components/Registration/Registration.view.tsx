import React, { FormHTMLAttributes } from "react";
import AppLink from "@/share/AppLink";
import AuthForm from "@/share/AuthForm";
import { Component } from "@/utils/components";
import {
	CustomButton,
	CustomField,
	CustomFields,
	CustomTitle,
} from "./Registration.styles";

const FIELDS = [
	{
		type: "email",
		name: "email",
		placeholder: "Почта",
	},
	{
		type: "text",
		name: "login",
		placeholder: "Логин",
	},
	{
		type: "text",
		name: "first_name",
		placeholder: "Имя",
	},
	{
		type: "text",
		name: "second_name",
		placeholder: "Фамилия",
	},
	{
		type: "tel",
		name: "phone",
		placeholder: "Телефон",
	},
	{
		type: "password",
		name: "password",
		placeholder: "Пароль",
	},
];

type FormProps = FormHTMLAttributes<HTMLFormElement>;

const Registration: Component<FormProps> = (props) => {
	return (
		<AuthForm {...props}>
			<CustomTitle level={2}>Регистрация</CustomTitle>
			<CustomFields>
				{FIELDS.map((field, index) => (
					<CustomField
						key={index}
						name={field.name}
						type={field.type}
						label={field.placeholder}
					/>
				))}
			</CustomFields>
			<CustomButton>Зарегистрироваться</CustomButton>
			<AppLink to="/auth/login">Войти</AppLink>
		</AuthForm>
	);
};

export default Registration;
