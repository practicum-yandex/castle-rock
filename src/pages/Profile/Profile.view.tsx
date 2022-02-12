import { Component } from "@/utils/components";
import React, { useCallback, useContext, useEffect, useState } from "react";
import {
	Field,
	ProfileContent,
	Wrapper,
	Overlay,
	CustomButton,
	FLoaderWrapper,
} from "./Profile.styles";

import Title from "@/share/Title";
import Avatar from "@/share/Avatar";
import PasswordForm from "@/components/PasswordForm";

import { FIELDS } from "@/models/ProfileFields";
import { UserService } from "@/services/UserService";
import { environments } from "@/utils/environments";
import { getFormValues } from "@/helpers/getFormValues";
import { AuthService, UserData } from "@/services/AuthService";
import { ReactReduxContext, useDispatch } from "react-redux";

const BASE_URL = environments.baseUrl + "/resources";

const getFields = (user?: UserData) => {
	return FIELDS.map((field, index) => (
		<Field key={index}>
			{field.name}
			<span>{user?.[field.field]}</span>
		</Field>
	));
};

const Profile: Component = () => {
	const dispatch = useDispatch();
	const { store } = useContext(ReactReduxContext);
	const [modalIsVisible, setModalVisibility] = useState<boolean>(false);
	const user: UserData = store.getState().user.item; // не сразу обновляется

	function close(event: React.MouseEvent): void {
		if (event.target === event.currentTarget) {
			setModalVisibility(false);
		}
	}

	const changeAvatar = useCallback((event: React.FormEvent): void => {
		const formData = new FormData(event.currentTarget as HTMLFormElement);

		dispatch(UserService.changeAvatar(formData));
	}, []);

	const changePassword = useCallback((event: React.FormEvent): void => {
		event.preventDefault();
		const formEl = event.target as HTMLFormElement;

		dispatch(
			UserService.changePassword(getFormValues(formEl), () =>
				setModalVisibility(false)
			)
		);
	}, []);

	useEffect(() => {
		if (!user) {
			dispatch(AuthService.getUser());
		}
	}, []);

	return (
		<>
			<ProfileContent>
				<FLoaderWrapper onChange={changeAvatar}>
					{user && <Avatar url={BASE_URL + user?.avatar} />}
				</FLoaderWrapper>
				{user?.display_name && <Title level={1}>{user?.display_name}</Title>}
				<Wrapper>{getFields(user)}</Wrapper>
				<Wrapper>
					<CustomButton onClick={() => setModalVisibility(true)}>
						Изменить пароль
					</CustomButton>
					<CustomButton>Выйти</CustomButton>
				</Wrapper>
			</ProfileContent>
			{modalIsVisible && (
				<Overlay onClick={close}>
					<PasswordForm onSubmit={changePassword} />
				</Overlay>
			)}
		</>
	);
};

export default Profile;
