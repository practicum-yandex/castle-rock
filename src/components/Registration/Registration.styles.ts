import Button from "@/share/Button";
import Input from "@/share/Input";
import Title from "@/share/Title";
import styled from "styled-components";

export const CustomTitle = styled(Title)`
	${({ theme }) => `
        margin-bottom: ${theme.spacing(3)};
	`}
`;

export const CustomFields = styled.div`
	${({ theme }) => `
        width: 100%;
        margin-bottom: ${theme.spacing(4)};
        display: flex;
        align-items: center;
        flex-direction: column;
    `}
`;

export const CustomField = styled(Input)`
	${({ theme }) => `
        width: 100%;
        margin-bottom: ${theme.spacing(2)};
    `}
`;

export const CustomButton = styled(Button)`
	${({ theme }) => `
        width: 100%;
        margin-bottom: ${theme.spacing(2)};
    `}
`;
