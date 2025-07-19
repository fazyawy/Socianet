import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router";
import { useShallow } from "zustand/shallow";

import profileService from "@/services/profile.service";
import { PROFILE_QUERY_KEY } from "@/constants/queryKeys.const";

import { useMyProfileStore } from "@/store/useMyProfileStore";

export const useInfo = () => {
	const { pathname } = useLocation();

	const [myId, myProfile] = useMyProfileStore(useShallow(state => [state.myId, state.myProfile]));

	const userId: number = pathname.slice(1) === "" ? myId : Number(pathname.slice(1));

	const isMyProfile = userId === myId;

	const { data: profile, isLoading: isProfileLoading, isSuccess: isProfileSuccess } = useQuery({
		queryKey: [PROFILE_QUERY_KEY, userId],
		queryFn: profileService.getProfile(userId),
		select: ({ data }) => data,
		enabled: !isMyProfile
	})

	const { photos, fullName, aboutMe, contacts } = isMyProfile ? { ...myProfile } :
		isProfileSuccess ? { ...profile } : { ...myProfile };

	const description = (aboutMe || `We know nothing about this person, but we sure - this is a good person.`).slice(0, 250)

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

