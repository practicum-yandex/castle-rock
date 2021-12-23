type Color = (opacity?: number) => string;

type Colors = {
	primary: Color;
	default: Color;
	secondary: Color;
	success?: Color;
	warning?: Color;
	danger: Color;
};

interface Theme {
	colors: Colors;
	spacing: (scale: number) => string;
}

interface StylesVariables {
	transition: string
}

const spacingList = [4, 8, 16];

const getColor = (baseColor: string) => {
	return (opacity = 1) => `rgba(${baseColor}, ${opacity})`;
};

export const stylesVariables: StylesVariables = {
	transition: '.1s'
}

export const theme: Theme = {
	colors: {
		primary: getColor("51, 105, 243"),
		default: getColor("0, 0, 0"),
		danger: getColor("255, 47, 47"),
		secondary: getColor("128, 128, 128")
	},
	spacing: (scale = 0) => `${spacingList[scale]}px`,
};

declare module "styled-components" {
	export interface DefaultTheme extends Theme {}
}