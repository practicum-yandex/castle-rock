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

declare module "styled-components" {
	export interface DefaultTheme extends Theme {}
}

const getColor = (baseColor: string) => {
	return (opacity = 1) => `rgba(${baseColor}, ${opacity})`;
};

const spacingList = [4, 8, 16];

export const theme: Theme = {
	colors: {
		primary: getColor("51, 105, 243"),
		secondary: getColor("153, 153, 153"),
		default: getColor("0, 0, 0"),
		danger: getColor("255, 47, 47"),
	},
	spacing: (scale = 0) => `${spacingList[scale]}px`,
};
