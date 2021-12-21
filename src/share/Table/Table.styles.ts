import styled, { css } from "styled-components";

export const CustomTable = styled.table`
	width: 100%;
	background-color: white;
`;

const cellStyles = css`
	${({ theme }) => `
    padding: ${theme.spacing(1)} ${theme.spacing(2)};
  `}
`;

export const Body = styled.tbody``;

export const Row = styled.tr`
	${({ theme }) => `
    border-bottom: 1px solid ${theme.colors.secondary(0.4)};
  `}
`;

export const Head = styled.thead`
	${Row} {
		border-width: 3px;
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
