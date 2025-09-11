import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

import { HTMLInputTypeAttribute } from "react";

import { Input } from "./Input";
import { empty } from "@/constants/empty.const";

describe("INPUT TESTS", () => {
	const renderSetup = (type?: HTMLInputTypeAttribute) => {
		const user = userEvent.setup();
		render(<Input
			type={type}
			title={""}
			placeholder="" />)

		const input = screen.getByTestId("input") as HTMLInputElement

		return {
			user,
			input
		}
	}

	test("text input", async () => {
		const { user, input } = renderSetup("text");

		expect(input.type).toBe("text");

		expect(input).toContainHTML("");

		await user.type(input, "123123");
		expect(input).toContainHTML("123123");

		await user.type(input, empty);
		expect(input).toContainHTML("");
	})

	test("checkbox input", async () => {
		const { user, input } = renderSetup("checkbox");

		expect(input.type).toBe("checkbox");

		expect(input).not.toBeChecked();

		await user.click(input);
		expect(input).toBeChecked();

		await user.click(input);
		expect(input).not.toBeChecked();
	})
})