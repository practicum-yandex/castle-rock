import styled, { css } from "styled-components";

export const CustomTable = styled.table`
	width: 100%;
	background-color: inherit;
	border-collapse: collapse;
`;

const cellStyles = css`
	${({ theme }) => `
    padding: ${theme.spacing(1)} ${theme.spacing(2)};
		border: 1px solid ${theme.border};
  `}
`;

export const Body = styled.tbody``;

export const Row = styled.tr``;

export const Head = styled.thead`
	${Row} {
		${({ theme }) => `
			border-bottom: 3px solid ${theme.border};
		`}
	}
`;

export const HeadCell = styled.th`
	${cellStyles}
	font-weight: bold;
	text-align: left;
`;

export const Cell = styled.td`
	${cellStyles}
`;
