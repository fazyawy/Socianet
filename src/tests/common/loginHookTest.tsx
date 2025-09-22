import { waitFor } from "@testing-library/react";

import { ILoginResponse } from "@/services/types/auth.types";

import { useLoginMutation } from "@/components/views/Login/hook/useLoginMutation";

import { renderHookWithQuery } from "../helpers/renderHookWithQuery";


let loginResponse: ILoginResponse;

beforeEach(() => {
	loginResponse = {
		data: {
			userId: 32602,
			token: ""
		},
		messages: [],
		resultCode: 0,
		fieldsErrors: []
	}
}
)

export const loginHookTest = () => {
	return test("LOGIN HOOK TEST", async () => {
		const { result, rerender } = renderHookWithQuery<typeof useLoginMutation>(useLoginMutation);

		result.current.mutate({
			"email": "stcursi@pzejw.com",
			password: "123",
			rememberMe: false
		})

		rerender();

		await waitFor(() => {
			return expect(!!result.current.isPending).toBe(false);
		})

		expect({ ...result.current.data?.data, data: { userId: 32602, token: "" } }).toEqual(loginResponse);
	})
}