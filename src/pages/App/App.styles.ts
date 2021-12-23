import styled, { createGlobalStyle } from "styled-components";

import CustomTitle from "@/share/Title";

export const Title = styled(CustomTitle)`
	${({ theme }) => `
    margin-bottom: ${theme.spacing(2)};
  `}
`;

export const GlobalStyles = createGlobalStyle`
	* { 
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	* {
		box-sizing: border-box;
	}

	body {
			font-family: 'Arial', sans-serif;
			font-size: 14px;
			color: ${({ theme }) => theme.colors.default()};
		}
`;
