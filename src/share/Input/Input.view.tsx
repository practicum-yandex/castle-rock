import React, { InputHTMLAttributes } from "react";
import { Component } from "@/utils/components";
import { CustomField, CustomLabel, CustomPlaceholder, CustomMessage } from "./Input.styles";

type Props = {
    label?: string;
    errorMessage?: string;
    errorMessageVisibility?: boolean;
};

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: Component<Props & InputProps> = ({className, ...props}) => {
    return (
        <CustomLabel className={className}>
            <CustomField {...props} placeholder=" "/>
            <CustomPlaceholder>{props.label}</CustomPlaceholder>
            <CustomMessage isVisible={props.errorMessageVisibility}>
                {props.errorMessage}
            </CustomMessage>
        </CustomLabel>
    )
};

export default Input;
