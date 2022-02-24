import React from "react";

import { render, screen } from "../../utils/test-utils";

import Title from "./";

describe("Title", () => {
	it("render children", () => {
		const TEXT = "Text";
		render(<Title>{TEXT}</Title>);
		expect(screen.getByText(TEXT)).toBeInTheDocument();
	});

	it("render default title", () => {
		const TEXT = "Text";
		render(<Title>{TEXT}</Title>);
		expect(screen.getByText(TEXT).tagName).toBe("H3");
	});

	it("render title level 2", () => {
		const TEXT = "Text";
		render(<Title level={2}>{TEXT}</Title>);
		expect(screen.getByText(TEXT).tagName).toBe("H2");
	});

	it("render title level 1", () => {
		const TEXT = "Text";
		render(<Title level={1}>{TEXT}</Title>);
		expect(screen.getByText(TEXT).tagName).toBe("H1");
	});
});
