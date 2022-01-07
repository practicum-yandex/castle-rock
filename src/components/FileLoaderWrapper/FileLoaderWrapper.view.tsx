import React from "react";
import { FormHTMLAttributes  } from "react";
import { Component } from "@/utils/components";
import { CustomForm, CustomInput, CustomLabel } from "./FileLoaderWrapper.styles";

type FormProps = FormHTMLAttributes<HTMLFormElement>

const FileLoaderWrapper: Component<FormProps> = ({children, ...props}) => {
    return (
        <CustomForm {...props}>
            <CustomLabel htmlFor="avatar">
                {children}
                <CustomInput 
                    type="file" 
                    id="avatar" 
                    name="avatar" 
                    accept="image/*" 
                />
            </CustomLabel>
        </CustomForm>
    )
};

export default FileLoaderWrapper;
