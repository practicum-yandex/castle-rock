import { theme } from "@/utils/theme";
import styled from "styled-components";

const labelSize = '12px';
const inputPadding = '12px';
const transition = theme.transition;

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
	width: 100%;
	padding: ${inputPadding} 0;
	border: none;
	color: inherit;
	border-bottom: 2px ${theme.colors.primary()} solid;
	transition: border-color ${transition};

	:focus {
		border-color: ${theme.colors.primary(0.5)};
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
`;

export const Placeholder = styled.span`
	position: absolute;
	top: ${inputPadding};
	left: 0;
	letter-spacing: 0.4px;
	color: ${theme.colors.secondary()};
	transition: font-size 0.2s ${transition}, top 0.2s ${transition};
`;

export const Message = styled.span<MessageProps>`
	opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
	margin-top: 0.5em;
	font-size: 9px;
	color: ${theme.colors.danger()};
`;
