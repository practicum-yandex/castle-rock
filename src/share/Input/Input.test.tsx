import React, { ChangeEvent, HTMLProps, useState } from "react";

import { render, screen, fireEvent } from "../../utils/test-utils";

import Input from "./";

const InputChanged = (props: HTMLProps<HTMLInputElement>) => {
	const [value, setValue] = useState(props.value);

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	return <Input {...props} value={value} onChange={onChange} />;
};

describe("Button", () => {
	it("render label", () => {
		const LABEL = "Input LABEL";
		render(<Input label={LABEL} />);
		expect(screen.getByText(LABEL)).toBeInTheDocument();
	});

	it("render value", () => {
		const VALUE = "Input Value";
		const { container } = render(
			<Input
				value={VALUE}
				onChange={() => {
					return;
				}}
			/>
		);
		const input = container.querySelector("input");
		expect(input?.value).toBe(VALUE);
	});

	it("change value", () => {
		const VALUE = "Input Value";
		const NEW_VALUE = "New Input Value";

		const { container } = render(<InputChanged value={VALUE} />);

		const input = container.querySelector("input");
		input && fireEvent.change(input, { target: { value: NEW_VALUE } });
		expect(input?.value).toBe(NEW_VALUE);
	});
});
