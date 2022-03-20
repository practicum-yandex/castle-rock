import styled from "styled-components";
import Button from "@/share/Button";
import Layout from "@/share/Layout";

export const Section = styled.section`
	${({ theme }) => `
        width: 100%;
        height: 90%;
        display: grid;
        gap: ${theme.spacing(3)};
        grid-template-columns: 300px 1fr;
        grid-template-rows: auto;
    `}
`;

export const CustomButtom = styled(Button)`
	${({ theme }) => `
        width: 100%;
    `}
`;

export const CustomLayout = styled(Layout)`
	${({ theme }) => `
        align-items: center;
        justify-content: space-between;
    `}
`;
