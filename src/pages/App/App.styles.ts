import styled, { createGlobalStyle } from "styled-components";

export const Title = styled.h2`
	${({ theme }) => `
		font-size: 24px;
		color: ${theme.colors.primary()};
		margin-bottom: ${theme.spacing(1)};
	`}
`;

export const GlobalStyles = createGlobalStyle`
	* { 
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	body {
		font-size: 14px;
		color: ${({ theme }) => theme.colors.default()};
	} 
`;
