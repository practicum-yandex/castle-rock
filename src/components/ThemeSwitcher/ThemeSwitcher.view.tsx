import React from "react";

import { Component } from "@/utils/components";

import { Button, Img } from "./ThemeSwitcher.styles";

const ThemeSwitcher: Component = (props) => {
	const theme = {
		name: "dark",
	};
	const test = () => {
		console.log("test");
	};

	return (
		<Button type="button" onClick={test} {...props}>
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
