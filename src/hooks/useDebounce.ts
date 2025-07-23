import { useCallback, useRef } from "react";

export const useDebounce = (callback: () => void, delay: number) => {
	const timer = useRef<null | NodeJS.Timeout>(null);

	const debouncedCallback = useCallback(() => {
		if (timer.current) clearTimeout(timer.current);

		timer.current = setTimeout(() => {
			callback();
		}, delay)
	}, [callback, delay])

	return debouncedCallback;
};

