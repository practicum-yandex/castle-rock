import styled from "styled-components";

const labelSize = "12px";
const inputPadding = "12px";

type MessageProps = {
	color?: string;
	isVisible?: boolean;
};

export const Label = styled.label`
	position: relative;
	display: block;
	width: 100%;
	margin-top: ${labelSize};
`;

export const Field = styled.input`
	${({ theme }) => `
		width: 100%;
		padding: ${inputPadding} 0;
		border: none;
		color: inherit;
		border-bottom: 2px ${theme.colors.primary()} solid;
		transition: border-color ${theme.transition};
		background-color: inherit;

		:focus {
			border-color: ${theme.colors.primary(0.5)};
			outline: none;
		}

		:focus,
		:not(:placeholder-shown) {
			& ~ span {
				top: -${inputPadding};
				font-size: ${labelSize};
			}
		}

		[invalid] {
			border-color: ${theme.colors.danger()};
		}
	`}
`;

export const Placeholder = styled.span`
	${({ theme }) => `
		position: absolute;
		top: ${inputPadding};
		left: 0;
		letter-spacing: 0.4px;
		pointer-events: none;
		color: ${theme.colors.secondary()};
		transition: font-size 0.2s ${theme.transition}, top 0.2s ${theme.transition};
	`}
`;

export const Message = styled.span<MessageProps>`
	${({ theme, isVisible }) => `
		opacity: ${isVisible ? "1" : "0"};
		margin-top: 0.5em;
		font-size: 9px;
		color: ${theme.colors.danger()};
	`}
`;
