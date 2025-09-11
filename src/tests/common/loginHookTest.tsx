import { renderHook } from "@testing-library/react";

import { ILoginResponse } from "@/services/types/auth.types";

import { createWrapperWithQueries } from "@/tests/helpers/createWrapperWithQueries";
import { useLoginMutation } from "@/components/views/Login/hook/useLoginMutation";


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
	const { result, rerender } = renderHook(() => useLoginMutation(), { wrapper: createWrapperWithQueries() });

	result.current.mutate({
		"email": "stcursi@pzejw.com",
		password: "123",
		rememberMe: false
	})

	return { rerender, loginResponse, result }
}