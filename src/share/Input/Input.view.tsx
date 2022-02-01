import React, { InputHTMLAttributes } from "react";
import { Component } from "@/utils/components";
import { Field, Label, Placeholder, Message } from "./Input.styles";

type Props = {
	label?: string;
	errorMessage?: string;
	errorMessageVisibility?: boolean;
};

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: Component<Props & InputProps> = ({ className, ...props }) => {
	return (
		<Label className={className}>
			<Field {...props} placeholder=" " />
			<Placeholder>{props.label}</Placeholder>
			<Message isVisible={props.errorMessageVisibility}>
				{props.errorMessage}
			</Message>
		</Label>
	);
};

export default Input;
