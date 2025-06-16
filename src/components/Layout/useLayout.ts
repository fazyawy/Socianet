import { AUTH_QUERY_KEY } from "@/constants/queryKeys.const";

import authService from "@/services/auth.service";

import { useAuthStore } from "@/store/useAuthStore";
import { useToggle } from "@/hooks/useToggle";

import { useQuery } from "@tanstack/react-query";

import { IAuthData } from "./Layout.type";

export const useLayout = () => {

	const setIsAuth = useAuthStore(state => state.setIsAuth)

	const {data, isLoading} = useQuery({
		queryKey: AUTH_QUERY_KEY,
		queryFn: authService.getAuth<IAuthData>,

		select: ({data}) => {
			setIsAuth(data?.resultCode === 0);
			return data;
		},
		retry: 2
	})

	console.log(data)

	const [haveAside, toggleAside] = useToggle(true);

	return {
		haveAside,
		toggleAside,

		isLoading
	};
};

