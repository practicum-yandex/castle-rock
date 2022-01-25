import React from "react";
import { render, screen } from "@testing-library/react";

import Button from "./";

describe("Button", () => {
	it("renders App component", () => {
		const TEXT = "Text Button";
		render(<Button>{TEXT}</Button>);
		expect(screen.getByText(TEXT)).toBeInTheDocument();
	});
});
