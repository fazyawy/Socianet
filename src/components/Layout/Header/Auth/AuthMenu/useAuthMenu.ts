import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import authService from "@/services/auth.service";

import { AUTH_QUERY_KEY, LOGOUT_MUTATION_KEY, PROFILE_QUERY_KEY } from "@/constants/queryKeys.const";

import { useToggle } from "@/hooks/useToggle";

import { useMyAvatarStore } from "@/store/useMyAvatarStore";
import { useAuthStore } from "@/store/useAuthStore";
import { useMyProfileStore } from "@/store/useMyProfileStore";
import { useShallow } from "zustand/shallow";
import profileService from "@/services/profile.service";



export const useAuthMenu = () => {

	const queryClient = useQueryClient();

	const [isOpenMenu, toggleIsOpenMenu] = useToggle(false);
	const myAvatar = useMyAvatarStore(state => state.myAvatar);

	const { mutate } = useMutation({
		mutationKey: LOGOUT_MUTATION_KEY,
		mutationFn: authService.logout,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: AUTH_QUERY_KEY
			})
		}
	})

	// const isAuth = useAuthStore(state => state.isAuth);
	// const [ myId, setMyProfile] = useMyProfileStore(useShallow(state => [state.myId, state.setMyProfile]))

	// const { data } = useQuery({
	// 	queryKey: PROFILE_QUERY_KEY,
	// 	queryFn: profileService.getProfile(myId),

	// 	select:({data}) => {
	// 		console.log(data)
	// 		setMyProfile(data);
	// 		return data
	// 	},
	// 	enabled: isAuth
	// })

	return {
		isOpenMenu,
		toggleIsOpenMenu,

		myAvatar: myAvatar,

		mutate: () => mutate()
	}
};

