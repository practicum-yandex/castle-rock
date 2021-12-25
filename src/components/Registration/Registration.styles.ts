import Button from "@/share/Button";
import Input from "@/share/Input";
import styled from "styled-components";

export const CustomForm = styled.form`
    ${({ theme }) => `
        width: 340px;
        padding: ${theme.spacing(3)};
        display: flex;
        align-items: center;
        flex-direction: column;
        background: #fff;
        border-radius: 12px;
        box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.14);
    `}
`;

export const CustomTitle = styled.h2`
	${({ theme }) => `
        margin-bottom: ${theme.spacing(3)};
        font-size: ${theme.headlines.h2};
        font-weight: bold;
        line-height: 1em;
        color: ${theme.colors.default()};
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
`

export const CustomLink = styled.a`
	${({ theme }) => `
        font-size: 11px;
        line-height: 11px;
        text-decoration: none;
        color: ${theme.colors.primary()};
        transition: linear ${theme.transition};

        :hover {
            color: ${theme.colors.primary(0.9)};
        }
	`}
`;
