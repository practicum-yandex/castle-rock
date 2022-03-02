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
};

interface Theme {
	colors: Colors;
	background: string;
	transition: string;
	fontColor: string;
	formBackground: string;
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

export const theme: Omit<
	Theme,
	"background" | "colors" | "fontColor" | "formBackground"
> = {
	transition: ".1s",
	border: secondary(0.4),

	headlines: {
		h1: "24px",
		h2: "20px",
		h3: "16px",
	},
	spacing: getSpacing,
};

export const lightTheme: Theme = {
	...theme,
	background: getColor("255, 255, 255")(),
	fontColor: "black",
	formBackground: getColor("255, 255, 255")(),
	colors: {
		primary: getColor("51, 105, 243"),
		secondary,
		default: getColor("0, 0, 0"),
		danger: getColor("255, 47, 47"),
	},
};

export const darkTheme: Theme = {
	...theme,
	background: getColor("0, 0, 0")(0.75),
	fontColor: getColor("255, 255, 255")(0.85),
	formBackground: getColor("0, 0, 0")(0.6),
	colors: {
		primary: getColor("50, 100, 220"),
		secondary,
		default: getColor("0, 0, 0"),
		danger: getColor("255, 47, 47"),
	},
};

declare module "styled-components" {
	export interface DefaultTheme extends Theme {}
}
