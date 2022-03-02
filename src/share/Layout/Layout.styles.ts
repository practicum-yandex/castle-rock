import styled from "styled-components";

export const CustomLayout = styled.div`
	${({ theme }) => `
		padding: ${theme.spacing(2)};
		height: 100vh;
		display: flex;
		flex-direction: column;
		background-color: ${theme.background};
		color: ${theme.fontColor};
	`}
`;
