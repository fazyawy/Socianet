import { render, screen } from "@testing-library/react"

import { Avatar } from "./Avatar"
import { AvatarType } from "./Avatar.type"

// "large" | "bigger" | "big" | "middle" | "small" | "smaller"

describe("AVATAR TESTS", () => {
	const renderSetup = (type: AvatarType) => {
		render(<Avatar type={type}/>)
	}

	test("large avatar test", () => {
		renderSetup("large");
		expect(screen.getByTestId("avatar-large")).toBeInTheDocument();
	})

	test("bigger avatar test", () => {
		renderSetup("bigger");
		expect(screen.getByTestId("avatar-bigger")).toBeInTheDocument();
	})

	test("big avatar test", () => {
		renderSetup("big");
		expect(screen.getByTestId("avatar-big")).toBeInTheDocument();
	})

	test("middle avatar test", () => {
		renderSetup("middle");
		expect(screen.getByTestId("avatar-middle")).toBeInTheDocument();
	})

	test("small avatar test", () => {
		renderSetup("small");
		expect(screen.getByTestId("avatar-small")).toBeInTheDocument();
	})

	test("smaller avatar test", () => {
		renderSetup("smaller");
		expect(screen.getByTestId("avatar-smaller")).toBeInTheDocument();
	})
})