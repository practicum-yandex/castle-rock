import Title from "@/share/Title";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const List = styled.section`
	${({ theme }) => `
		width: max-content;
		height: 100%;
	`}
`

export const ThemeLink = styled(Link)`
	${({ theme }) => `
		width: 300px;
		height: 70px;
		padding: ${theme.spacing(1)};
		margin-bottom: ${theme.spacing(2)};
		border-radius: 8px;
		border: 1px solid ${theme.border};
		display: block;
		color: inherit;
		cursor: pointer;
		text-decoration: none;
		
	`}
`

export const CustomTitle = styled(Title)`
	${({ theme }) => `
		width: 100%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		margin-bottom: ${theme.spacing(0)}
	`}
`

export const Description = styled.p`
	${({ theme }) => `
		width: 100%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: 14px;
	`}
`