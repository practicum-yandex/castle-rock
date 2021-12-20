import React, { ButtonHTMLAttributes } from "react";

import { Component } from "@/utils/components";

import { CustomButton } from "./Button.styles";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: Component<Props> = (props) => <CustomButton {...props} />;

export default Button;
