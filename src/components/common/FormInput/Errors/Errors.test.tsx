import { render, screen } from "@testing-library/react";

import { Errors } from "./Errors";

describe("ERRORS TESTS", () => {
	const renderSetup = (errorMessage?: string) => render(<Errors message={errorMessage} />)

	test("render no errors", () => {
		renderSetup();

		expect(screen.getByTestId("errors").textContent).toBe("");
	})

	test("render with errors", () => {
		renderSetup("error");

		expect(screen.getByTestId("errors").textContent).toBe("error");
	})

})