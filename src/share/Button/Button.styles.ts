import styled from "styled-components";

export const CustomButton = styled.button`
	${({ theme }) => `
		border: none;
		cursor: pointer;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		font-size: 14px;
		color: white;
		background-color: ${theme.colors.primary()};
		padding: ${theme.spacing(1)} ${theme.spacing(2)};
		border-radius: ${theme.spacing()};
		transition: background-color ease 0.25s;

		:hover {
			background-color: ${theme.colors.primary(0.9)};
		}
	`}
`;
