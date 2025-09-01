import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

import { HTMLInputTypeAttribute } from "react";

import { Input } from "./Input";
import { empty } from "@/constants/empty.const";

describe("INPUT TESTS", () => {
	const renderSetup = (type?: HTMLInputTypeAttribute) => render(<Input
		type={type}
		title={""}
		placeholder="" />)

	test("text input", async () => {
		const user = userEvent.setup();
		renderSetup("text");

		const input = screen.getByTestId("input");

		expect(input).toContainHTML("");

		await user.type(input, "123123");
		expect(input).toContainHTML("123123");

		await user.type(input, empty);
		expect(input).toContainHTML("");
	})
})