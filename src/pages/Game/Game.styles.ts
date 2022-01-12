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
		border: 1px solid ${theme.border};
	`}
`;

export const GameField = styled.div`
	display: flex;
	height: 100%;
	width: 100%;
`;

export const CanvasWrap = styled.div`
	height: 100%;
	width: 100%;
`;

export const Controls = styled.div`
	${({ theme }) => `
		margin-left: ${theme.spacing(3)};
		display: flex;
		flex-direction: column;
		justify-content: center;
		flex-shrink: 0;
		width: 150px;

		> *:not(:last-child) {
			margin-bottom: ${theme.spacing(2)};
		}
	`}
`;
