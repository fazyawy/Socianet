import { expect, test, describe } from "vitest"
import { waitFor } from "@testing-library/react";

import { useMyProfile } from "./hooks/useMyProfile";
import { useIsAuth } from "./hooks/useIsAuth";
import { useMyStatus } from "./hooks/useMyStatus";

import { IAuthData } from "@/services/types/auth.types";
import { IProfile } from "@/shared/types/profile.type";

import { loginHookTest } from "@/tests/common/loginHookTest";

import { renderHookWithQuery } from "@/tests/helpers/renderHookWithQuery";

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

	loginHookTest();

	test("useIsAuth tests", async () => {
		const { result: authResult } = renderHookWithQuery<typeof useIsAuth>(useIsAuth);

		await waitFor(() => {
			return expect(authResult.current?.isSuccess).toBe(true);
		})

		expect(authResult.current.data).toEqual(response.auth);
	})

	test("useMyProfile tests", async () => {

		const { result } = renderHookWithQuery<typeof useMyProfile>(useMyProfile, 32602, true);

		await waitFor(() => {
			return expect(result.current?.isSuccess).toBe(true);
		})

		expect(result.current.data).toEqual(response.profile);
	})

	test("useMyStatus tests", async () => {

		const { result } = renderHookWithQuery<typeof useMyStatus>(useMyStatus, 32602, true);

		await waitFor(() => {
			return expect(!!result.current?.isSuccess).toBe(true);
		})

		expect(result.current.data).toBeNull();
	})
})