import { useIsFollowQuery } from './hooks/useIsFollowQuery';
import { describe } from "vitest"

import { loginHookTest } from "@/tests/common/loginHookTest";
import { renderHookWithQuery } from "@/tests/helpers/renderHookWithQuery";
import { waitFor } from '@testing-library/dom';
import { IResponse } from '@/services/types/services.type';
import { useFollowMutation } from './hooks/useFollowMutation';
import { useUnFollowMutation } from './hooks/useUnFollowMutation';

describe("FOLLOW HOOKS TESTS", () => {

	let response: {
		isFollow: boolean,
		follow: IResponse
	}

	beforeEach(() => {
		response = {
			isFollow: false,

			follow: {
				resultCode: 0,
				messages: [],
				fieldsErrors: [],
				data: {}
			},

		}
	})

	loginHookTest();

	// test("Follow and unfollow", async () => {
	// 	const { result: isFollowed } = renderHookWithQuery<typeof useIsFollowQuery>(useIsFollowQuery, true, 2023);

	// 	// await waitFor(() => {
	// 	// 	return expect(!!isFollowed.current).toBe(true);
	// 	// 	// return expect(!!isFollowed.current.isFetching).toBe(false);
	// 	// })

	// 	// expect(isFollowed.current).toEqual(response.isFollow)

	// 	const { result: unfollowResult, rerender: unfollowRerender } = renderHookWithQuery<typeof useUnFollowMutation>(useUnFollowMutation, true, 2023);

	// 	unfollowResult.current.mutate(2023);

	// 	unfollowRerender();

	// 	await waitFor(() => {
	// 		return expect(!!unfollowResult.current.isPending).toBe(false);
	// 	})

	// 	expect(unfollowResult.current).toEqual(response.follow)

	// 	const { result: followResult, rerender: followRerender } = renderHookWithQuery<typeof useFollowMutation>(useFollowMutation, true, 2023);

	// 	followResult.current.mutate(2023);

	// 	followRerender();

	// 	await waitFor(() => {
	// 		return expect(!!followResult.current.isPending).toBe(false);
	// 	})

	// 	expect(followResult.current).toEqual(response.follow)
	// })
})