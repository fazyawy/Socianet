import { describe } from "vitest"

import { loginHookTest } from "@/tests/common/loginHookTest";
import { waitFor } from "@testing-library/dom";

describe("LOGIN HOOKS TESTS", () => {

	test("useLoginMutation tests", async () => {

		const { loginResponse, rerender, result } = loginHookTest();

		rerender();

		await waitFor(() => {
			return expect(!!result.current.isPending).toBe(false);
		})

		expect({ ...result.current.data?.data, data: { userId: 32602, token: "" } }).toEqual(loginResponse);
	})
})