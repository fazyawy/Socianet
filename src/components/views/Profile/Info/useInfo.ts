import { useQuery, useQueryClient } from "@tanstack/react-query";

import profileService from "@/services/profile.service";

import { useMyProfileStore } from "@/store/useMyProfileStore";
import { useLocation } from "react-router";
import { useEffect } from "react";
import { STATUS_QUERY_KEY, USER_PROFILE_QUERY_KEY } from "@/constants/queryKeys.const";
import { useShallow } from "zustand/shallow";

export const useInfo = () => {
	const { pathname } = useLocation();

	const [myId, myProfile] = useMyProfileStore(useShallow(state => [state.myId, state.myProfile]));

	const queryClient = useQueryClient();

	const userId: number | string = pathname.slice(1) === "" ? myId : Number(pathname.slice(1));

	const isMyProfile = userId === myId;

	const { data: profile, isLoading: isProfileLoading, isSuccess: isProfileSuccess } = useQuery({
		queryKey: [USER_PROFILE_QUERY_KEY],
		queryFn: profileService.getProfile(userId),
		select: ({ data }) => data,
		enabled: !isMyProfile
	})

	const { photos, fullName, aboutMe, contacts } = isMyProfile ? { ...myProfile } :
		isProfileSuccess ? { ...profile } : { ...myProfile };

	const description = (aboutMe || `We know nothing about this person, but we sure - this is a good person.`).slice(0, 250)

	useEffect(() => {
		queryClient.invalidateQueries({
			queryKey: [STATUS_QUERY_KEY]
		});
	}, [userId])

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

