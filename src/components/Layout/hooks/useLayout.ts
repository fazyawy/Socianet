import { useShallow } from "zustand/shallow";
import { useEffect } from "react";

import { useAuthStore } from "@/store/useAuthStore";
import { useMyProfileStore } from "@/store/useMyProfileStore";

import { useToggle } from "@/hooks/useToggle";

import { useIsAuth } from "./useIsAuth";
import { useMyProfile } from "./useMyProfile";
import { useMyStatus } from "./useMyStatus";


export const useLayout = () => {
	const { setIsAuth, isAuth } = useAuthStore(state => state);
	const [setMyId, defaultId, setMyProfile, setStatus] = useMyProfileStore(useShallow(state => [state.setMyId, state.myId, state.setMyProfile, state.setStatus]));

	const { data: authData, isFetching: isAuthFetching, isSuccess: isAuthSuccess } = useIsAuth();

	const myId: number = (isAuthSuccess && authData.resultCode === 0) ? authData.data.id : defaultId;

	const isAuthChecked = (isAuthSuccess && authData.resultCode === 0);

	const { isFetching: isProfileFetching, data: profile, isSuccess: isProfileSuccess } = useMyProfile(myId, isAuthChecked);

	const { data: status, isFetching: isStatusFetching, isSuccess: isStatusSuccess } = useMyStatus(myId, isAuthChecked)

	useEffect(() => {
		if (isAuthSuccess) {
			setIsAuth(authData.resultCode === 0);
			setMyId(myId);
		}
		if (isProfileSuccess) setMyProfile(profile);
		if(isStatusSuccess) setStatus(status);
	}, [isAuthFetching, isProfileFetching, isStatusFetching])

	const [haveAside, toggleAside] = useToggle(true);

	return {
		haveAside,
		toggleAside,

		isLoading: isAuthFetching || isProfileFetching || isStatusFetching,
		isSuccess: isAuth ? isAuthSuccess && isProfileSuccess && isStatusSuccess : isAuthSuccess
	};
};

