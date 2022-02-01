import styled from "styled-components";

export const Button = styled.button`
	${({ theme }) => `
		font-size: 24px;
		color: ${theme.colors.secondary()};
		display: inline-flex;
		border: none;
		background: none;
		cursor: pointer;
	`}
`;

export const Img = styled.img`
	width: 30px;
	height: 30px;
`;
