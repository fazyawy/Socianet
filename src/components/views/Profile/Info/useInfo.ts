import { useQuery } from "@tanstack/react-query";

import profileService from "@/services/profile.service";

import { useMyProfileStore } from "@/store/useMyProfileStore";
import { useLocation } from "react-router";
import { useEffect } from "react";

export const useInfo = () => {
	const { pathname } = useLocation();

	let userId: number | string = pathname.slice(1);

	const { myId, myProfile } = useMyProfileStore(state => state);

	userId = userId === "" ? myId : Number(userId);

	const isMyProfile = userId === myId;

	const { data: profile, isLoading: isProfileLoading } = useQuery({
		queryKey: ['show profile'],
		queryFn: profileService.getProfile(userId),
		select: ({ data }) => data,
		enabled: !isMyProfile
	})

	const { photos, fullName, aboutMe } = isMyProfile ? { ...myProfile } : { ...profile };

	const description = (aboutMe || `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae dolor laborum sapiente deleniti autem optio ab. Dolor, omnis eum. Accusamus voluptates saepe quis asperiores commodi perspiciatis aperiam veniam distinctio natus? Saepe ullam minima, assumenda quibusdam quam excepturi similique. Sapiente sed tempora laborum dignissimos fugit, blanditiis ullam quasi, adipisci sunt qui incidunt quaerat vero aperiam! Labore velit excepturi vero sint provident.`).slice(0, 250)

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
		fullName,
		description,
		isProfileLoading,
		isMyProfile,
		userId: userId,
		status,
		isStatusLoading
	}
};

