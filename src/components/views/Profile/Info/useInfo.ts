import { useProfileQuery } from "./hooks/useProfileQuery";

import { useLocation } from "react-router";

import { useMyProfileStore } from "@/store/useMyProfileStore";

export const useInfo = () => {
	const { pathname } = useLocation();

	const myId = useMyProfileStore(state => state.myId);

	const userId: number = pathname.slice(1) === "" ? myId : Number(pathname.slice(1));

	const isMyProfile = userId === myId;

	const { data: { photos, fullName, aboutMe, contacts }, isLoading: isProfileLoading } = useProfileQuery(userId, isMyProfile);

	const description = aboutMe?.slice(0, 250) || `We know nothing about this person, but we sure - this is a good person.`

	return {
		photo: photos?.large || undefined,
		info_description: {
			description,
			contacts: Object.values(contacts).some(el => el !== null) ? contacts : null,
		},

		isProfileLoading,
		isMyProfile,
		userId,
		name: fullName
	}
};

