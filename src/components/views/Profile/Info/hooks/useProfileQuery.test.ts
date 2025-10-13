import { expect, test, describe } from "vitest"
import { waitFor } from "@testing-library/react";

import { IProfile } from "@/shared/types/profile.type";

import { loginHookTest } from "@/tests/common/loginHookTest";

import { renderHookWithQuery } from "@/tests/helpers/renderHookWithQuery";

import { useProfileQuery } from "./useProfileQuery";

describe("LAYOUT HOOKS TESTS", () => {

	let response: {
		myProfile: IProfile,
		profile: IProfile
	}

	beforeEach(() => {
		response = {
			myProfile: {
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
			}
		}
	})

	loginHookTest();

	test("useProfileQuery my profile tests", async () => {
		const { result } = renderHookWithQuery<typeof useProfileQuery>(useProfileQuery, 32602, false);

		await waitFor(() => {
			return expect(!!result.current?.data).toBe(true);
		})

		expect(result.current.data).toEqual(response.myProfile);
	})

})