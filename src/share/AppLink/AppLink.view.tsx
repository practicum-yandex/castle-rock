import React, { AnchorHTMLAttributes } from "react";
import { Component } from "@/utils/components";
import { CustomLink } from "./AppLink.styles";
import { LinkProps } from "react-router-dom";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & LinkProps;

const AppLink: Component<Props> = (props) => <CustomLink {...props} />;

export default AppLink;
