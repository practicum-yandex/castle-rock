import React from "react";
import { CustomButton, CustomField, CustomFields, CustomForm, CustomLink, CustomTitle } from "./Login.styles";

const Login: React.FC = () => {
    return (
        <CustomForm>
            <CustomTitle>Вход</CustomTitle>
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
            <CustomLink>Нет аккаунта?</CustomLink>
        </CustomForm>
    )
};

export default Login;
