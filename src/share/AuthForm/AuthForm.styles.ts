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