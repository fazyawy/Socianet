import { expect, test, describe } from "vitest"
import { renderHook, waitFor } from "@testing-library/react";

import { IAuthData } from "@/services/types/auth.types";

import { useIsAuth } from "./hooks/useIsAuth";
import { createWrapperWithQueries } from "@/tests/helpers/createWrapperWithQueries";
import { useMyProfile } from "./hooks/useMyProfile";
import { useMyStatus } from "./hooks/useMyStatus";

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
				// resultCode: 0,
				// data: {
				// 	id: 32514,
				// 	login: "nuuuuuuuuuuuuuuuuuuu",
				// 	email: "cilmogerda@gufum.com"
				// }
				data: {},
				messages: [
					"You are not authorized",
				],
				fieldsErrors: [],
				resultCode: 1,
			}
		}
	}
	)

	test("useIsAuth tests", async () => {

		const { result } = renderHook(() => useIsAuth(), { wrapper: createWrapperWithQueries() });

		await waitFor(() => {
			return expect(result.current?.isSuccess).toBe(authResponse.isAuthSuccess);
		})

		expect(JSON.stringify(result.current.data)).toEqual(JSON.stringify(authResponse.data));
	})

	// const myId: number = (authResponse?.isAuthSuccess && authResponse?.authData.resultCode === 0) ? authResponse?.authData.data.id : 2;

	// const isAuthChecked = (isAuthSuccess && authData.resultCode === 0);

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