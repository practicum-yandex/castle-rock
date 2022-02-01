import styled from "styled-components";

export type AvatarProps = {
	url?: string;
	diameter?: string;
};

export const Wrapper = styled.div<AvatarProps>`
	width: ${(props) => props.diameter || "130px"};
`;

export const CustomAvatar = styled.div<AvatarProps>`
	width: 100%;
	padding-top: 100%;
	border-radius: 50%;
	background-color: #efefef;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	background-image: url(${(props) => props.url});
`;
