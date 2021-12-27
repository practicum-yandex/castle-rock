import styled from "styled-components";

export const CustomLayout = styled.div`
	${({ theme }) => `
		background-color: ${theme.colors.secondary(0.1)};
		padding: ${theme.spacing(2)};
		min-height: 100vh;
	`}
`;
