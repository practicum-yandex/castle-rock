import React, { FormEventHandler, useEffect, useRef, useState } from "react";
import { Component } from "@/utils/components";
import { Field, Label, Placeholder, Message } from "./Input.styles";

type Props = {
    inputWidth?: string
    labelText?: string
    errorMessage?: string
    inputHanlder: FormEventHandler<HTMLInputElement>
}

const Input: Component<Props> = (props) => {
    const inputRef = useRef(null);
    const [messageIsVisible, setMessageVisibility] = useState(false);

    useEffect(() => {
        // пока я не знаю как правильно прокинуть валидаторы
        setMessageVisibility(false)
    }, [messageIsVisible]);

    return (
        <>
            <Label inputWidth={props.inputWidth}>
                <Field ref={inputRef} onInput={props.inputHanlder} placeholder=" "/>
                <Placeholder>{props.labelText}</Placeholder>
                <Message isVisible={messageIsVisible}>
                    {props.errorMessage}
                </Message>
            </Label>
        </>
    )
};

export default Input;
