import styled from "styled-components";

export const Section = styled.section`
	${({ theme }) => `
		width: 100%;
		height: 100%;
		display: grid;
		gap: ${theme.spacing(2)};
		grid-template-columns: 1fr;
		grid-template-rows: auto 1fr 150px;
	`}
`;

export const Content = styled.div`
	width: 100%;
	font-size: 16px;
	line-height: 1.5em;
`;

export const Textarea = styled.textarea`
	${({ theme }) => `
		width: 100%;
		height: 100%;
		padding: ${theme.spacing(2)};
		font: inherit;
		font-size: 16px;
		border-radius: 8px;
		border: 1px solid ${theme.border};
		outline: none;
		resize: none;
	`}
`;
