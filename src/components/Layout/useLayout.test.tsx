import { expect, test, describe } from "vitest"
import { renderHook, waitFor } from "@testing-library/react";

import { IAuthData } from "@/services/types/auth.types";

import { useIsAuth } from "./hooks/useIsAuth";
import { createWrapperWithQueries } from "@/tests/helpers/createWrapperWithQueries";
import { useMyProfile } from "./hooks/useMyProfile";
import { useMyStatus } from "./hooks/useMyStatus";
import { loginHookTest } from "@/tests/common/loginHookTest";

describe("LAYOUT HOOKS TESTS", () => {

	let authResponse: {
		isAuthSuccess: true
		data: IAuthData | {
			data: {},
			fieldsErrors: [],
			messages: string[],
			resultCode: 1
		};
	}

	beforeEach(() => {
		authResponse = {
			isAuthSuccess: true,
			data: {
				resultCode: 0,
				data: {
					id: 32602,
					login: "wookong",
					email: "stcursi@pzejw.com"
				},
				fieldsErrors: [],
				messages: []
				// data: {},
				// messages: [
				// 	"You are not authorized",
				// ],
				// fieldsErrors: [],
				// resultCode: 1,
			}
		}
	}
	)

	test("useIsAuth tests", async () => {

		// LOGIN PART ==============================
		const { result: loginResult, rerender, loginResponse } = loginHookTest();

		rerender();

		await waitFor(() => {
			return expect(!!loginResult.current.isPending).toBe(false);
		})

		expect({ ...loginResult.current.data?.data, data: { userId: 32602, token: "" } }).toEqual(loginResponse);

		rerender();

		// AUTH PART =======================================

		const { result } = renderHook(() => useIsAuth(), { wrapper: createWrapperWithQueries() });

		await waitFor(() => {
			return expect(result.current?.isSuccess).toBe(authResponse.isAuthSuccess);
		})

		expect(result.current.data).toEqual(authResponse.data);
	})

	test("useMyProfile tests", async () => {

		const { result } = renderHook(() => useMyProfile(0, false), { wrapper: createWrapperWithQueries() });

		await waitFor(() => {
			return expect(!!result.current?.isSuccess).toBe(false);
		})

		expect(JSON.stringify(result.current.data)).toBeUndefined();
	})

	test("useMyStatus tests", async () => {

		const { result } = renderHook(() => useMyStatus(2, false), { wrapper: createWrapperWithQueries() });

		await waitFor(() => {
			return expect(!!result.current?.isSuccess).toBe(false);
		})

		expect(JSON.stringify(result.current.data)).toBeUndefined();
	})
})