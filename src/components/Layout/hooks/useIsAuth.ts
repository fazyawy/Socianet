import { useQuery } from "@tanstack/react-query";

import { AUTH_QUERY_KEY } from "@/constants/queryKeys.const";
import authService from "@/services/auth.service";
import { useMyProfileStore } from "@/store/useMyProfileStore";

export const useIsAuth = () => {

	const defaultId = useMyProfileStore(state => state.myId);

	const { data, isFetching, isSuccess } = useQuery({
		queryKey: [AUTH_QUERY_KEY],
		queryFn: authService.getAuth,

		select: ({ data }) => data,
		retry: 2,
	})

	const myId: number = (isSuccess && data?.resultCode === 0) ? !!data.data.id ? data.data.id : defaultId : defaultId;

	const isAuthChecked = (isSuccess && data?.resultCode === 0);

	return { data, isFetching, isSuccess, myId, isAuthChecked }
};

