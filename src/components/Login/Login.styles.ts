import ShareButton from "@/share/Button";
import Input from "@/share/Input";
import ShareTitle from "@/share/Title";
import styled from "styled-components";

export const Title = styled(ShareTitle)`
	${({ theme }) => `
        margin-bottom: ${theme.spacing(3)};
	`}
`;

export const Fields = styled.div`
	${({ theme }) => `
        width: 100%;
        margin-bottom: ${theme.spacing(5)};
        display: flex;
        align-items: center;
        flex-direction: column;
	`}
`;

export const Field = styled(Input)`
    ${({ theme }) => `
        width: 100%;
        margin-bottom: ${theme.spacing(2)};
    `}
`;

export const Button = styled(ShareButton)`
    ${({ theme }) => `
        width: 100%;
        margin-bottom: ${theme.spacing(2)};
    `}
`
