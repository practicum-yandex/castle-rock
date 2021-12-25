import React from "react";
import { CustomButton, CustomField, CustomFields, CustomForm, CustomLink, CustomTitle } from "./Registration.styles";

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
        type: 'email',
        placeholder: 'Имя'
    },
    {
        type: 'email',
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
        <CustomForm>
            <CustomTitle>Регистрация</CustomTitle>
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
            <CustomLink href="#">Войти</CustomLink>
        </CustomForm>
    )
};

export default Registration;
