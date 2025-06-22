import { useShallow } from "zustand/shallow";
import { useEffect } from "react";

import { AUTH_QUERY_KEY, PROFILE_QUERY_KEY } from "@/constants/queryKeys.const";

import authService from "@/services/auth.service";
import profileService from "@/services/profile.service";

import { useAuthStore } from "@/store/useAuthStore";
import { useMyProfileStore } from "@/store/useMyProfileStore";

import { useToggle } from "@/hooks/useToggle";

import { useQuery } from "@tanstack/react-query";


export const useLayout = () => {
	const { setIsAuth, isAuth } = useAuthStore(state => state);
	const [setMyId, defaultId, setMyProfile] = useMyProfileStore(useShallow(state => [state.setMyId, state.myId, state.setMyProfile]));

	const { data: authData, isFetching: isAuthFetching, isSuccess: isAuthSuccess } = useQuery({
		queryKey: [ AUTH_QUERY_KEY ],
		queryFn: authService.getAuth,

		select: ({ data }) => data,
		retry: 2,
	})

	const myId: number = (isAuthSuccess && authData.resultCode === 0) ? authData.data.id : defaultId;

	const { isFetching: isProfileFetching, data: profile, isSuccess: isSuccessProfile } = useQuery({
		queryKey: PROFILE_QUERY_KEY,
		queryFn: profileService.getProfile(myId),

		select: ({ data }) => data,
		retry: 2,

		enabled: (isAuthSuccess && authData.resultCode === 0) || !!isAuth,
	})

	useEffect(() => {
		if (isAuthSuccess) {
			setIsAuth(authData.resultCode === 0);
			setMyId(myId);
		}
		if (isSuccessProfile) setMyProfile(profile);
	}, [isAuthFetching, isProfileFetching])

	const [haveAside, toggleAside] = useToggle(true);

	return {
		haveAside,
		toggleAside,

		isLoading: isAuthFetching || isProfileFetching
	};
};

