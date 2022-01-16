import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
	* { 
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	body {
        font-size: 14px;
        font-weight: 400;
        font-style: normal;
        font-family: Inter, serif;
		color: ${({ theme }) => theme.colors.default()};
	}

	a {
		text-decoration: none;
	}
`;
