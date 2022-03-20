import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";

import { Component } from "@/utils/components";
import { UserData } from "@/services/AuthService";
import { ThemeService, ThemeData } from "@/services/ThemeService";
import { setTheme } from "@/store/reducers/theme";

import { Button, Img } from "./ThemeSwitcher.styles";

const ThemeSwitcher: Component = (props) => {
	const dispatch = useDispatch();
	const user = useSelector<any, UserData>((state) => state.user.item);
	const theme = useSelector<any, ThemeData>((state) => state.theme.item);

	const changeTheme = (name: string) => {
		ThemeService.changeTheme(user.id, name)
			.then(() => dispatch((dp: Dispatch) => dp(setTheme({ ...theme, name }))))
			.catch((err) => {
				console.error(err);
			});
	};

	if (!user || !theme) {
		return null;
	}

	return (
		<Button
			type="button"
			onClick={() => changeTheme(theme.name === "dark" ? "light" : "dark")}
			{...props}
		>
			<Img
				src={`./static/images/theme_${
					theme.name === "dark" ? "light" : "dark"
				}.jpg`}
				alt="themeSwitcher"
			/>
		</Button>
	);
};

export default ThemeSwitcher;
