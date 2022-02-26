import ShareButton from "@/share/Button";
import ShareTitle from "@/share/Title";
import styled from "styled-components";

export const Form = styled.form`
    ${({ theme }) => `
        width: 80%;
        height: 80%;
        display: flex;
        flex-direction: column;
        position: absolute;
        padding: ${theme.spacing(2)};
        border-radius: 16px;
        border: 1px solid ${theme.border};
        background-color: #fff;
    `}
`;

export const Title = styled(ShareTitle)`
    ${({ theme }) => `
        margin-bottom: ${theme.spacing(2)};
        text-align: center;
    `}
`;

export const Input = styled.input`
    ${({ theme }) => `
        width: 100%;
        height: 60px;
        font-size: ${theme.spacing(2)};
        padding: ${theme.spacing(1)};
        margin-bottom: ${theme.spacing(2)};
        border-radius: 8px;
        border: 1px solid ${theme.border};
    `}
`;

export const Textarea = styled.textarea`
    ${({ theme }) => `
        width: 100%;
        height: 100%;
        font-size: ${theme.spacing(2)};
        padding: ${theme.spacing(1)};
        margin-bottom: ${theme.spacing(2)};
        border-radius: 8px;
        border: 1px solid ${theme.border};
        resize: none;
    `}
`;

export const Button = styled(ShareButton)`
    ${({ theme }) => `
        width: 100%;
        height: 50px;
    `}
`;

export const Overlay = styled.div`
	${({ theme }) => `
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        position: fixed;
        align-items: center;
        justify-content: center;
        background-color: ${theme.border};
    `}
`;
