import React from "react";
import AppLink from "@/share/AppLink";
import AuthForm from "@/share/AuthForm";
import { CustomButton, CustomField, CustomFields, CustomTitle } from "./Registration.styles";

const FIELDS = [
    {
        type: 'email',
        placeholder: 'Почта'
    },
    {
        type: 'text',
        placeholder: 'Логин'
    },
    {
        type: 'text',
        placeholder: 'Имя'
    },
    {
        type: 'text',
        placeholder: 'Фамилия'
    },
    {
        type: 'phone',
        placeholder: 'Телефон'
    },
    {
        type: 'password',
        placeholder: 'Пароль'
    }
]

const Registration: React.FC = () => {
    return (
        <AuthForm>
            <CustomTitle level={2}>Регистрация</CustomTitle>
            <CustomFields>
                {FIELDS.map((field, index) =>
                    <CustomField 
                        key={index}
                        type={field.type}
                        label={field.placeholder}
                    />
                )}
            </CustomFields>
            <CustomButton>Зарегистрироваться</CustomButton>
            <AppLink to="/auth/login">Войти</AppLink>
        </AuthForm>
    )
};

export default Registration;
