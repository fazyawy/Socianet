import { useLocation } from "react-router";

import { useToggle } from "@/hooks/useToggle";
import { useMyProfileStore } from "@/store/useMyProfileStore";

export const useAuthMenu = () => {

	const { pathname } = useLocation()

	const [isOpenMenu, toggleIsOpenMenu] = useToggle(false);
	const { photos } = useMyProfileStore(state => state.myProfile);

	return {
		isOpenMenu,
		toggleIsOpenMenu,

		myAvatar: photos.small,
		isSettings: pathname.slice(0, 9) === "/settings"

		// mutate: () => mutate()
	}
};

