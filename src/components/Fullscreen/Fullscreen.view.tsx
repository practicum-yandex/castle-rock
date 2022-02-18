import React, { useRef, useState } from "react";

import { Component } from "@/utils/components";
import { useIsSsr } from "@/utils/useIsSsr";

import { Button, Img } from "./Fullscreen.styles";

const Fullscreen: Component = (props) => {
	const [openStatus, setOpenStatus] = useState(false);
	const buttonRef = useRef(null);

	const isSsr = useIsSsr();

	function toggleFullScreen() {
		if (!document.fullscreenElement) {
			document.documentElement.requestFullscreen();
			setOpenStatus(true);
		} else if (document.exitFullscreen) {
			document.exitFullscreen();
			setOpenStatus(false);
		}
	}

	if (isSsr || !document.documentElement.requestFullscreen) {
		return null;
	}

	return (
		<Button type="button" ref={buttonRef} onClick={toggleFullScreen} {...props}>
			{!openStatus ? (
				<Img src="./static/images/fullscreen.png" alt="fullscreen" />
			) : (
				"X"
			)}
		</Button>
	);
};

export default Fullscreen;
