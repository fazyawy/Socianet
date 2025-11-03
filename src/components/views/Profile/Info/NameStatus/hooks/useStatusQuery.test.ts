import { expect, test, describe } from "vitest"
import { waitFor } from "@testing-library/react";

import { loginHookTest } from "@/tests/common/loginHookTest";

import { renderHookWithQuery } from "@/tests/helpers/renderHookWithQuery";

import { useStatusQuery } from "./useStatusQuery";

describe("LAYOUT HOOKS TESTS", () => {

	let response: {
		myStatus: string | null,
		status: string | null
	}

	beforeEach(() => {
		response = {
			myStatus: null,

			status: "ghgdddsdsd sd123ывdsdsыввы"
		}
	})

	loginHookTest();

	test("useStatusQuery my status tests", async () => {
		const { result } = renderHookWithQuery<typeof useStatusQuery>(useStatusQuery, 32602, false);

		await waitFor(() => {
			return expect(result.current?.isLoading).toBe(false);
		})

		expect(result.current.data).toEqual(response.myStatus);
	})

	test("useStatusQuery another person's status tests", async () => {
		const { result } = renderHookWithQuery<typeof useStatusQuery>(useStatusQuery, 32602, false);

		await waitFor(() => {
			return expect(result.current?.isLoading).toBe(false);
		})

		expect(result.current.data).toEqual(response.myStatus);
	})

})