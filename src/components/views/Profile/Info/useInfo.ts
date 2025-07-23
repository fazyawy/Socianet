import { useProfileQuery } from "./hooks/useProfileQuery";

import { useLocation } from "react-router";
import { useShallow } from "zustand/shallow";

import { useMyProfileStore } from "@/store/useMyProfileStore";

export const useInfo = () => {
	const { pathname } = useLocation();

	const [myId, myProfile] = useMyProfileStore(useShallow(state => [state.myId, state.myProfile]));

	const userId: number = pathname.slice(1) === "" ? myId : Number(pathname.slice(1));

	const isMyProfile = userId === myId;

	const { data: profile, isLoading: isProfileLoading, isSuccess: isProfileSuccess } = useProfileQuery(userId, isMyProfile)

	const { photos, fullName, aboutMe, contacts } = !isMyProfile && isProfileSuccess ? { ...profile } : { ...myProfile };

	const description = aboutMe?.slice(0, 250) || `We know nothing about this person, but we sure - this is a good person.`

	return {
		photo: photos.large || undefined,
		info_description: {
			description,
			contacts,
		},

		isProfileLoading,
		isMyProfile,
		userId: Number(userId),
		name: fullName
	}
};

