import { CHECK_IS_FOLLOW_QUERY_KEY } from "@/constants/queryKeys.const";
import followService from "@/services/follow.service";
import profileService from "@/services/profile.service";
import { useMyProfileStore } from "@/store/useMyProfileStore";
import { useQuery } from "@tanstack/react-query";

export const useInfo = (id: number | string) => {
	const { myId, myProfile } = useMyProfileStore(state => state)
	console.log(id)

	id = id === "" ? myId : Number(id);

	const isMyProfile = id === myId;

	const { data: profile, isLoading } = useQuery({
		queryKey: ['show profile'],
		queryFn: profileService.getProfile(id),
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
		isFollowed: false
	}
};

