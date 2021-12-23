import React, { HTMLAttributes } from "react";

import { Component } from "@/utils/components";

import { H1, H2, H3 } from "./Title.styles";

type TitleProps = HTMLAttributes<HTMLHeadingElement>;

interface Props {
	level?: number;
}

const Title: Component<Props & TitleProps> = ({ level, ...props }) => {
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
