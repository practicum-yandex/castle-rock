import styled, { createGlobalStyle } from "styled-components";

import { resetStyles } from "@/utils/resetStyles";

export const Title = styled.h2`
	${({ theme }) => `
		font-size: 24px;
		color: ${theme.colors.primary()};
		margin-bottom: ${theme.spacing(1)};
	`}
`;

export const GlobalStyles = createGlobalStyle`
	${resetStyles}

	body {
			font-size: 14px;
			color: ${({ theme }) => theme.colors.default()};
		} 
`;
