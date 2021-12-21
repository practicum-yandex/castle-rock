import React, { HTMLAttributes } from "react";

import { Component } from "@/utils/components";

import { H1, H2, H3 } from "./Title.styles";

interface Props extends HTMLAttributes<HTMLHeadingElement> {
	level?: number;
}

const Title: Component<Props> = ({ level, ...props }) => {
	switch (level) {
		case 1:
			return <H1 {...props} />;
		case 2:
			return <H2 {...props} />;
		default:
			return <H3 {...props} />;
	}
};

export default Title;
