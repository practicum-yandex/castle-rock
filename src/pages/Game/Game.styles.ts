import styled from "styled-components";

export const GameContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	flex-grow: 1;


`;

export const Wrapper = styled.div`
	${({ theme }) => `
		display: flex;
		align-items: center;
		flex-direction: column;

		> * {
			margin-bottom: ${theme.spacing(2)};

			:last-child {
				margin-bottom: 0;
			}
		}
	`}
`