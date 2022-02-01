import React from "react";

import { render, screen, fireEvent } from "../../utils/test-utils";

import Button from "./";

describe("Button", () => {
	it("render children", () => {
		const TEXT = "Text Button";
		render(<Button>{TEXT}</Button>);
		expect(screen.getByText(TEXT)).toBeInTheDocument();
	});

	it("check onClick", () => {
		const handleClick = jest.fn();
		render(<Button onClick={handleClick}>Click Me</Button>);
		fireEvent.click(screen.getByText(/click me/i));
		expect(handleClick).toHaveBeenCalledTimes(1);
	});
});
