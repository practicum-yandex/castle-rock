import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import "@testing-library/jest-dom/extend-expect";

import { darkTheme } from "../utils/theme";

const AllTheProviders = ({ children }: any) => {
	return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
};

const customRender = (ui: any, options?: any) =>
	render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
