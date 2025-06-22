import { useQuery } from "@tanstack/react-query";

import profileService from "@/services/profile.service";

import { useMyProfileStore } from "@/store/useMyProfileStore";
import { useLocation } from "react-router";

export const useInfo = () => {
	const { pathname } = useLocation();

	let userId: number | string = pathname.slice(1);

	const { myId, myProfile } = useMyProfileStore(state => state)
	console.log(userId)

	userId = userId === "" ? myId : Number(userId);

	const isMyProfile = userId === myId;

	const { data: profile, isLoading } = useQuery({
		queryKey: ['show profile'],
		queryFn: profileService.getProfile(userId),
		select: ({ data }) => data,
		enabled: !isMyProfile
	})

	const { photos, fullName, aboutMe } = isMyProfile ? { ...myProfile } : { ...profile };

	const description = (aboutMe || `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae dolor laborum sapiente deleniti autem optio ab. Dolor, omnis eum. Accusamus voluptates saepe quis asperiores commodi perspiciatis aperiam veniam distinctio natus? Saepe ullam minima, assumenda quibusdam quam excepturi similique. Sapiente sed tempora laborum dignissimos fugit, blanditiis ullam quasi, adipisci sunt qui incidunt quaerat vero aperiam! Labore velit excepturi vero sint provident.`).slice(0, 250)

	return {
		photos,
		fullName,
		description,
		isLoading,
		isMyProfile,
		userId: userId
	}
};

