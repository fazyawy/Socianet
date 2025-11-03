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
				userId: 32514,
				aboutMe: "I'm frontend developer",
				lookingForAJob: false,
				lookingForAJobDescription: "not",
				fullName: "fazyawy2",
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
					small: "https://social-network.samuraijs.com/activecontent/images/users/32514/user-small.jpg?v=0",
					large: "https://social-network.samuraijs.com/activecontent/images/users/32514/user.jpg?v=0"
				},
			}
		}
	})

	loginHookTest();

	test("useProfileQuery my profile tests", async () => {
		const { result } = renderHookWithQuery<typeof useProfileQuery>(useProfileQuery, 32602, true);

		await waitFor(() => {
			return expect(!!result.current?.isLoading).toBe(false);
		})

		expect(result.current.data).toEqual(response.myProfile);
	})

	test("useProfileQuery another person's profile tests", async () => {
		const { result } = renderHookWithQuery<typeof useProfileQuery>(useProfileQuery, 32514, false);

		await waitFor(() => {
			return expect(!!result.current?.isLoading).toBe(false);
		})

		expect(result.current.data).toEqual(response.profile);
	})

})