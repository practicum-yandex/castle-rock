type Color = (opacity?: number) => string;

type Colors = {
	primary: Color;
	default: Color;
	secondary: Color;
	success?: Color;
	warning?: Color;
	danger: Color;
};

type Headlines = {
	h1: string;
	h2: string;
	h3: string;
}

interface Theme {
	colors: Colors;
	transition: string;
	headlines: Headlines;
	spacing: (scale?: number) => string;
	border: ReturnType<Color>;
}

const getColor = (baseColor: string) => {
	return (opacity = 1) => `rgba(${baseColor}, ${opacity})`;
};

const getSpacing = (scale = 0) => {
	const spacingList = [4, 8, 16, 32, 64, 128];

	if (scale < 0 || scale > 5) {
		throw new Error("Wrong scale value");
	}

	return `${spacingList[scale]}px`;
};

const secondary = getColor("153, 153, 153");

export const theme: Theme = {
	transition: ".1s",
	border: secondary(0.4),

	headlines: {
		h1: '24px',
		h2: '20px',
		h3: '16px'
	},

	colors: {
		primary: getColor("51, 105, 243"),
		secondary,
		default: getColor("0, 0, 0"),
		danger: getColor("255, 47, 47"),
	},

	spacing: getSpacing
};

declare module "styled-components" {
	export interface DefaultTheme extends Theme {}
}
