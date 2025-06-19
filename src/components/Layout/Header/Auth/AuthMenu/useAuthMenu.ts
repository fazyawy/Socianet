import { useMutation, useQueryClient } from "@tanstack/react-query";
import authService from "@/services/auth.service";

import { AUTH_QUERY_KEY, LOGOUT_MUTATION_KEY } from "@/constants/queryKeys.const";

import { useToggle } from "@/hooks/useToggle";
import { useMyProfileStore } from "@/store/useMyProfileStore";



export const useAuthMenu = () => {

	const queryClient = useQueryClient();

	const [isOpenMenu, toggleIsOpenMenu] = useToggle(false);
	const { photos } = useMyProfileStore(state => state.myProfile);

	const { mutate } = useMutation({
		mutationKey: LOGOUT_MUTATION_KEY,
		mutationFn: authService.logout,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: AUTH_QUERY_KEY
			})
		}
	})

	return {
		isOpenMenu,
		toggleIsOpenMenu,

		myAvatar: photos.small || "https://i.pravatar.cc/150?img=5",

		mutate: () => mutate()
	}
};

