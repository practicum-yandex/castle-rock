import React, { HTMLAttributes } from "react";
import { Component } from "@/utils/components";
import { AvatarProps, CustomAvatar, Wrapper } from "./Avatar.styles";

type Props = HTMLAttributes<HTMLDivElement>;

const Avatar: Component<Props & AvatarProps> = ({ diameter, ...props }) => {
	return (
		<Wrapper diameter={diameter}>
			<CustomAvatar {...props} />
		</Wrapper>
	);
};

export default Avatar;
