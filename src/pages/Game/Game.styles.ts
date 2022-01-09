import styled from "styled-components";

export const GameContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	flex-grow: 1;
`;

export const Canvas = styled.canvas`
	${({ theme }) => `
		border: 1px solid ${theme.border}
	`}
`