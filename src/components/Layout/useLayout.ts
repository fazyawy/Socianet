import { useShallow } from "zustand/shallow";
import { useEffect } from "react";
import { useLocation } from "react-router";

import { useAuthStore } from "@/store/useAuthStore";
import { useMyProfileStore } from "@/store/useMyProfileStore";

import { useToggle } from "@/hooks/useToggle";

import { useIsAuth } from "./hooks/useIsAuth";
import { useMyProfile } from "./hooks/useMyProfile";
import { useMyStatus } from "./hooks/useMyStatus";
import { useTheme } from "./hooks/useTheme";


export const useLayout = () => {
	const { pathname } = useLocation();

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

	const isDarkTheme = useTheme();

	return {
		haveAside: haveAside,
		// haveAside: pathname !== "/auth/login" && haveAside,
		toggleAside,

		isLoading: isAuthFetching || isProfileFetching || isStatusFetching,
		isSuccess: isAuth ? isAuthSuccess && isProfileSuccess && isStatusSuccess : isAuthSuccess,

		isSettings: pathname.slice(0, 9) === "/settings",
		isRedirect: isAuth === false && (pathname === "/" || pathname === "/messenger" || pathname === "/friends" || !!Number(pathname.slice(1)) || pathname.slice(0, 9) === "/settings"),
		isDarkTheme
	};
};

