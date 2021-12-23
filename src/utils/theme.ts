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
	spacing: (scale?: number) => string;
	border: ReturnType<Color>;
}

declare module "styled-components" {
	export interface DefaultTheme extends Theme {}
}

const getColor = (baseColor: string) => {
	return (opacity = 1) => `rgba(${baseColor}, ${opacity})`;
};

const getSpacing = (scale = 0) => {
	if (scale < 0 || scale > 3) {
		throw new Error("Wrong scale value");
	}

	const spacingList = [4, 8, 16, 32];

	return `${spacingList[scale]}px`;
};

const secondary = getColor("153, 153, 153");

export const theme: Theme = {
	colors: {
		primary: getColor("51, 105, 243"),
		secondary,
		default: getColor("0, 0, 0"),
		danger: getColor("255, 47, 47"),
	},
	spacing: getSpacing,
	border: secondary(0.4),
};
