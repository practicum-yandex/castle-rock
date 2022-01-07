import { Component } from "@/utils/components";
import React, { useEffect, useState } from "react";
import { Field, ProfileContent, Wrapper, Overlay, CustomButton, FLoaderWrapper } from "./Profile.styles";

import Title from "@/share/Title";
import Avatar from "@/share/Avatar";
import PasswordForm from "@/components/PasswordForm";

import { FIELDS } from "@/models/ProfileFields";
import { UserService } from "@/services/UserService";
import { environments } from "@/utils/environments";
import { getFormValues } from "@/helpers/getFormValues";
import { AuthService, UserData } from "@/services/AuthService";

const BASE_URL = environments.baseUrl + '/resources';

const getFields = (user?: UserData) => {
    return FIELDS.map((field, index) => (
        <Field key={index}>
            {field.name}
            <span>
                {user?.[field.field]}
            </span>
        </Field>
    ))
}

const Profile: Component = () => {
    const [user, setUser] = useState<UserData>();
    const [modalIsVisible , setModalVisibility] = useState<boolean>(false);

    function close(event: React.MouseEvent): void {       
        if (event.target === event.currentTarget) {
            setModalVisibility(false);
        }
    }

    function changeAvatar(event: React.FormEvent) {
        const formData = new FormData(event.currentTarget as HTMLFormElement);

        UserService.changeAvatar(formData, (data: UserData) => setUser(data))
    }

    function changePassword(event: React.FormEvent) {
        event.preventDefault();
        const values = getFormValues(event.currentTarget as HTMLFormElement);

        UserService.changePassword(values, () => setModalVisibility(false));
    }

    useEffect(() => {
        AuthService.getUser(setUser)
    }, []);

    return <>
        <ProfileContent>
            <FLoaderWrapper onChange={changeAvatar}>
                { user && <Avatar url={BASE_URL + user?.avatar} /> }
            </FLoaderWrapper>
            <Title level={1}>{user?.display_name}</Title>
            <Wrapper>{getFields(user)}</Wrapper>
            <Wrapper>
                <CustomButton onClick={() => setModalVisibility(true)}>Изменить пароль</CustomButton>
                <CustomButton>Выйти</CustomButton>
            </Wrapper>
        </ProfileContent>
        { modalIsVisible && <Overlay onClick={close}><PasswordForm onSubmit={changePassword}/></Overlay>}
    </>
};

export default Profile;
