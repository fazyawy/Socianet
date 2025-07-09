import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useLocation } from "react-router";
import { useEffect } from "react";
import { useShallow } from "zustand/shallow";

import profileService from "@/services/profile.service";
import { STATUS_QUERY_KEY, PROFILE_QUERY_KEY } from "@/constants/queryKeys.const";

import { useMyProfileStore } from "@/store/useMyProfileStore";

export const useInfo = () => {
	const { pathname } = useLocation();

	const [myId, myProfile] = useMyProfileStore(useShallow(state => [state.myId, state.myProfile]));

	const queryClient = useQueryClient();

	const userId: number = pathname.slice(1) === "" ? myId : Number(pathname.slice(1));

	const isMyProfile = userId === myId;

	const { data: profile, isLoading: isProfileLoading, isSuccess: isProfileSuccess } = useQuery({
		queryKey: [PROFILE_QUERY_KEY],
		queryFn: profileService.getProfile(userId),
		select: ({ data }) => data,
		enabled: !isMyProfile
	})

	const { photos, fullName, aboutMe, contacts } = isMyProfile ? { ...myProfile } :
		isProfileSuccess ? { ...profile } : { ...myProfile };

	useEffect(() => {
		if (!isMyProfile) {
			queryClient.invalidateQueries({
				queryKey: [STATUS_QUERY_KEY]
			});
		}
	}, [isMyProfile])

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

