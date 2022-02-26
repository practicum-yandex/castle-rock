import { createGlobalStyle } from "styled-components";

export const GlobalFonts = createGlobalStyle`
	@font-face {
        font-family: 'Inter';
		font-weight: 400;
		font-style: normal;
		src: url('static/fonts/Inter-Regular.woff2') format('woff2'),
		     url('static/fonts/Inter-Regular.woff') format('woff');
    }

	@font-face {
        font-family: 'Inter';
		font-weight: 600;
		font-style: normal;
		src: url('static/fonts/Inter-SemiBold.woff2') format('woff2'),
		     url('static/fonts/Inter-SemiBold.woff') format('woff');
    }
`;
