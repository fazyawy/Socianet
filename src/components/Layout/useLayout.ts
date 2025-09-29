import { useShallow } from "zustand/shallow";
import { useEffect } from "react";

import { useAuthStore } from "@/store/useAuthStore";
import { useMyProfileStore } from "@/store/useMyProfileStore";

import { useIsAuth } from "./hooks/useIsAuth";
import { useMyProfile } from "./hooks/useMyProfile";
import { useMyStatus } from "./hooks/useMyStatus";
import { useTheme } from "./hooks/useTheme";
import { useAside } from "./hooks/useAside";


export const useLayout = () => {
	const { setIsAuth, isAuth } = useAuthStore(state => state);
	const [setMyId, setMyProfile, setStatus] = useMyProfileStore(useShallow(state => [state.setMyId, state.setMyProfile, state.setStatus]));

	const { data: authData, isFetching: isAuthFetching, isSuccess: isAuthSuccess, myId, isAuthChecked } = useIsAuth();

	const { data: profile, isFetching: isProfileFetching, isSuccess: isProfileSuccess } = useMyProfile(myId, isAuthChecked);

	const { data: status, isFetching: isStatusFetching, isSuccess: isStatusSuccess } = useMyStatus(myId, isAuthChecked)

	useEffect(() => {
		if (isAuthSuccess) {
			setIsAuth(authData?.resultCode === 0);
			setMyId(myId);
		}
		if (isProfileSuccess) setMyProfile(profile);
		if (isStatusSuccess) setStatus(status);
	}, [isAuthFetching, isProfileFetching, isStatusFetching])

	const { haveAside, toggleHaveAside } = useAside();

	const isDarkTheme = useTheme();

	return {
		aside: {
			haveAside: haveAside,
			// haveAside: pathname !== "/auth/login" && haveAside,
			toggleAside: toggleHaveAside,
		},

		isLoading: isAuthFetching || isProfileFetching || isStatusFetching,
		isSuccess: isAuth ? isAuthSuccess && isProfileSuccess && isStatusSuccess : isAuthSuccess,

		isDarkTheme
	};
};

