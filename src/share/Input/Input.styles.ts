import { theme } from "@/utils/theme";
import styled from "styled-components";

const labelSize = '8px'
const inputPadding = '8px'

type LabelProps = {
    inputWidth?: string
}

type FieldProps = {
    transition?: string
}

type PlaceholderProps = {
    color?: string
    transition?: string
}

type MessageProps = {
    color?: string
    transition?: string
    isVisible?: boolean
}

export const Label = styled.label<LabelProps>`
    position: relative;
    display: block;
    width: ${({ inputWidth }) => inputWidth ? inputWidth : '100%' };
    margin-top: ${labelSize};
`;

export const Field = styled.input<FieldProps>`
    width: 100%;
    padding: ${inputPadding} 0;
    border: none;
    border-bottom: 2px ${theme.colors.primary()} solid;
    transition: border-color ${({ transition }) => transition ? transition : '.1s' };

    &:focus {
        border-color: ${theme.colors.primary(0.5)};
    }
  
    &:focus, 
    &:not(:placeholder-shown) {
        & ~ span {
            top: -${inputPadding};
            font-size: ${labelSize};
        }
    }

    &[invalid] {
        border-color: ${theme.colors.danger()};
    }
`;

export const Placeholder = styled.span<PlaceholderProps>`
    position: absolute;
    top: ${inputPadding};
    left: 0;
    color: ${({ color }) => color ? color : theme.colors.default() };
    transition: font-size 0.2s ${({ transition }) => transition ? transition : '.1s' }, 
                top 0.2s ${({ transition }) => transition ? transition : '.1s' };
`;

export const Message = styled.span<MessageProps>`
    opacity: ${({ isVisible }) => isVisible ? '1' : '0' };;
    margin-top: 0.5em;
    font-size: 9px;
    color: ${({ color }) => color ? color : theme.colors.danger() };
`