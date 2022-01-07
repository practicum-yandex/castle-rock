import React, { FormHTMLAttributes  } from "react";
import AuthForm from "@/share/AuthForm";
import { Component } from "@/utils/components";
import { CustomButton, CustomField, CustomFields, CustomTitle } from "./PasswordForm.styles";

type FormProps = FormHTMLAttributes<HTMLFormElement>

const PasswordForm: Component<FormProps> = (props) => {
    return (
        <AuthForm {...props}>
            <CustomTitle level={2}>Изменить пароль</CustomTitle>
            <CustomFields>
            <CustomField
                    name="oldPassword"
                    type="password"
                    label="Старый пароль"
                />
                <CustomField
                    name="newPassword"
                    type="password"
                    label="Новый пароль"
                />
            </CustomFields>
            <CustomButton>Подтвердить</CustomButton>
        </AuthForm>
    )
};

export default PasswordForm;
