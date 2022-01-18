import { createGlobalStyle } from "styled-components";

import InterRegularWoff from '../static/fonts/Inter-Regular.woff';
import InterRegularWoff2 from '../static/fonts/Inter-Regular.woff2';
import InterBoldWoff from '../static/fonts/Inter-SemiBold.woff';
import InterBoldWoff2 from '../static/fonts/Inter-SemiBold.woff2';

export const GlobalFonts = createGlobalStyle`
	@font-face {
        font-family: 'Inter';
		font-weight: 400;
		font-style: normal;
		src: url(${InterRegularWoff2}) format('woff2'),
		     url(${InterRegularWoff}) format('woff');
    }

	@font-face {
        font-family: 'Inter';
		font-weight: 600;
		font-style: normal;
		src: url(${InterBoldWoff2}) format('woff2'),
		     url(${InterBoldWoff}) format('woff');
    }
`
