import { expect, test, describe } from "vitest"
import { renderHook, waitFor } from "@testing-library/react";

import { IAuthData } from "@/services/types/auth.types";

import { useIsAuth } from "./hooks/useIsAuth";
import { createWrapperWithQueries } from "@/tests/helpers/createWrapperWithQueries";
import { useMyProfile } from "./hooks/useMyProfile";
import { useMyStatus } from "./hooks/useMyStatus";
import { loginHookTest } from "@/tests/common/loginHookTest";
import { IProfile } from "@/shared/types/profile.type";

describe("LAYOUT HOOKS TESTS", () => {

	let response: {
		auth: IAuthData,
		profile: IProfile
	}

	beforeEach(() => {
		response = {
			auth: {
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
			},

			profile: {
				userId: 32602,
				aboutMe: null,
				lookingForAJob: false,
				lookingForAJobDescription: null,
				fullName: "wookong",
				contacts: {
					github: null,
					vk: null,
					facebook: null,
					instagram: null,
					twitter: null,
					website: null,
					youtube: null,
					mainLink: null,
				},
				photos: {
					small: null,
					large: null
				},
			},


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

		const { result: authResult } = renderHook(() => useIsAuth(), { wrapper: createWrapperWithQueries() });

		await waitFor(() => {
			return expect(authResult.current?.isSuccess).toBe(true);
		})

		expect(authResult.current.data).toEqual(response.auth);
	})

	test("useMyProfile tests", async () => {

		const { result } = renderHook(() => useMyProfile(32602, true), { wrapper: createWrapperWithQueries() });

		await waitFor(() => {
			return expect(result.current?.isSuccess).toBe(true);
		})

		expect(result.current.data).toEqual(response.profile);
	})

	test("useMyStatus tests", async () => {

		const { result } = renderHook(() => useMyStatus(32602, true), { wrapper: createWrapperWithQueries() });

		await waitFor(() => {
			return expect(!!result.current?.isSuccess).toBe(true);
		})

		expect(result.current.data).toBeNull();
	})
})