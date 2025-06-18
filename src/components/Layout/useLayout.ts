import { AUTH_QUERY_KEY, PROFILE_QUERY_KEY } from "@/constants/queryKeys.const";

import authService from "@/services/auth.service";

import { useAuthStore } from "@/store/useAuthStore";
import { useToggle } from "@/hooks/useToggle";

import { useQuery } from "@tanstack/react-query";

import { IAuthData } from "./Layout.type";
import { useMyProfileStore } from "@/store/useMyProfileStore";
import { useShallow } from "zustand/shallow";
import profileService from "@/services/profile.service";

export const useLayout = () => {

	const {setIsAuth, isAuth} = useAuthStore(state => state);
	const setMyId = useMyProfileStore(state => state.setMyId)

	const { data, isLoading, isSuccess } = useQuery({
		queryKey: AUTH_QUERY_KEY,
		queryFn: authService.getAuth<IAuthData>,

		select: ({ data }) => {
			setIsAuth(data.resultCode === 0);
			setMyId(data.data.id);
			return data;
		},
		retry: 2
	})

	const [myId, setMyProfile] = useMyProfileStore(useShallow(state => [state.myId, state.setMyProfile]))

	const { isLoading: profileIsLoading } = useQuery({
		queryKey: PROFILE_QUERY_KEY,
		queryFn: profileService.getProfile(myId),

		select: ({ data }) => {
			setMyProfile(data);
			return data
		},
		enabled: (isSuccess && data.resultCode === 0) || !!isAuth
	})

	console.log(data)

	const [haveAside, toggleAside] = useToggle(true);

	return {
		haveAside,
		toggleAside,

		isLoading: isLoading || profileIsLoading
	};
};

