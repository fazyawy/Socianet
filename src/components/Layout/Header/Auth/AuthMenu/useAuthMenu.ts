import { useMutation, useQueryClient } from "@tanstack/react-query";
import authService from "@/services/auth.service";

import { AUTH_QUERY_KEY, LOGOUT_MUTATION_KEY } from "@/constants/queryKeys.const";

import { useToggle } from "@/hooks/useToggle";

import { useMyAvatarStore } from "@/store/useMyAvatarStore";



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

	return {
		isOpenMenu,
		toggleIsOpenMenu,

		myAvatar,

		mutate: () => mutate()
	}
};

