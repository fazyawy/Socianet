import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

import { FormInput } from "./FormInput";
import { empty } from "@/constants/empty.const";

describe("FORM INPUT TESTS", () => {
	const user = userEvent.setup();
	const renderSetup = (type?: "text" | "password" | "email" | "textarea") => {
		render(<FormInput
		inputData={{type: type,
		title:""}} />)

		const input = screen.getByTestId("input") as HTMLInputElement;
		const clearBtn = screen.getByTestId("clear input btn");

		return {
			input,
			clearBtn,
			user
		}
	}

	test("text input", async () => {
		const {input, clearBtn, user} = renderSetup("text")

		expect(input.type).toBe("text")

		expect(input).toContainHTML("");

		await user.type(input, "123123");
		expect(input).toContainHTML("123123");

		await user.click(clearBtn);
		expect(input).toContainHTML("");

		await user.type(input, "fazyaWY");
		expect(input).toContainHTML("fazyaWY");

		await user.type(input, empty);
		expect(input).toContainHTML("");
	})

	test("textarea input", async () => {
		const {input, clearBtn, user} = renderSetup("textarea");

		expect(input.type).toBe("textarea");

		expect(input).toContainHTML("");

		await user.type(input, "123123");
		expect(input).toContainHTML("123123");

		await user.click(clearBtn);
		expect(input).toContainHTML("");

		await user.type(input, "fazyaWY");
		expect(input).toContainHTML("fazyaWY");

		await user.type(input, empty);
		expect(input).toContainHTML("");
	})

	test("password input", async () => {
		const {input, clearBtn, user} = renderSetup("password");

		expect(input.type).toBe("password");

		expect(input).toContainHTML("");

		await user.type(input, "123123");
		expect(input).toContainHTML("123123");

		await user.click(clearBtn);
		expect(input).toContainHTML("");

		await user.type(input, "fazyaWY");
		expect(input).toContainHTML("fazyaWY");

		await user.type(input, empty);
		expect(input).toContainHTML("");
	})

	test("email input", async () => {
		const { user, input, clearBtn } = renderSetup("email");

		expect(input.type).toBe("email");

		expect(input).toContainHTML("");

		await user.type(input, "123123");
		expect(input).toContainHTML("123123");

		await user.click(clearBtn);
		expect(input).toContainHTML("");

		await user.type(input, "fazyaWY");
		expect(input).toContainHTML("fazyaWY");

		await user.type(input, empty);
		expect(input).toContainHTML("");
	})
})