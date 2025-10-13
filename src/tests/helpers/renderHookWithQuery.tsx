import { renderHook } from "@testing-library/react";
import { createWrapperWithQueries } from "./utils/createWrapperWithQueries";

type argsType = [number, boolean] | [] | [boolean, number] | [boolean]

export function renderHookWithQuery<T>(hook: T, ...args: argsType) {
	return renderHook(() => typeof hook === "function" ? hook(...args) : () => {}, { wrapper: createWrapperWithQueries() });
};

