import { expect, test, describe } from "vitest"
import { fireEvent, screen } from "@testing-library/react";

import axios from "axios";

import { Layout } from "./Layout"

import { renderWithRouterAndQueries } from "@/tests/helpers/renderWithRouterAndQueries";
import { toggleTest } from "@/tests/common/toggleTest";

import { Mock } from "vitest"
import { IAuthData } from "@/services/types/auth.types";

vitest.mock("axios");

describe("LAYOUT TESTS", () => {

	test("render", () => {
		renderWithRouterAndQueries({
			element: <Layout />
		})
		expect(screen.getByTestId("layout-container")).toBeInTheDocument();
		expect(screen.getByTestId("header")).toBeInTheDocument();
		// screen.debug();
	})

	toggleTest("aside", <Layout />)
})

describe("ASYNC LAYOUT TESTS", () => {

	let authResponse: { data: IAuthData };
	beforeEach(() => {
		authResponse = {
			data: {
				resultCode: 0,
				data: {
					id: 32514,
					login: "nuuuuuuuuuuuuuuuuuuu",
					email: "cilmogerda@gufum.com"
				}
			}
		}
	})

	test("auth", async () => {
		(axios.get as Mock).mockReturnValue(authResponse);

		renderWithRouterAndQueries({
			element: <Layout />
		});

		const preloaderEl = await screen.findByTestId("preloader");

		expect((axios.get as Mock)).toBeCalledTimes(1);
		expect(preloaderEl).toBeInTheDocument();
	})
})