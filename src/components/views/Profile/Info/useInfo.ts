import { useQuery } from "@tanstack/react-query";

import profileService from "@/services/profile.service";

import { useMyProfileStore } from "@/store/useMyProfileStore";
import { useLocation } from "react-router";
import { useEffect } from "react";

export const useInfo = () => {
	const { pathname } = useLocation();

	const { myId, myProfile } = useMyProfileStore(state => state);

	const userId: number | string = pathname.slice(1) === "" ? myId : Number(pathname.slice(1));

	const isMyProfile = userId === myId;

	const { data: profile, isLoading: isProfileLoading } = useQuery({
		queryKey: ['show profile'],
		queryFn: profileService.getProfile(userId),
		select: ({ data }) => data,
		enabled: !isMyProfile
	})

	const { photos, fullName, aboutMe } = isMyProfile ? { ...myProfile } : { ...profile };

	const description = (aboutMe || `We know nothing about this person, but we sure - this is a good person.`).slice(0, 250)

	const { data: status, isLoading: isStatusLoading, refetch: statusRefetch } = useQuery({
		queryKey: ['status'],
		queryFn: profileService.getStatus(userId),
		select: ({ data }) => data,
	})

	useEffect(() => {
		statusRefetch();
	}, [userId])

	return {
		photos,
		description,
		isProfileLoading,
		isMyProfile,
		userId: userId,

		name_status: {
			name: fullName,
			status,
			isStatusLoading
		}
	}
};

