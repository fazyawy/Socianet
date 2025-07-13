import { getIsAuthSelector } from "@/store/selectors/auth.selector";
import { useAuthStore } from "@/store/useAuthStore";
import { useMyProfileStore } from "@/store/useMyProfileStore";

export const useUser = (userId: number) => {

	const isAuth = useAuthStore(getIsAuthSelector)
	const myId = useMyProfileStore(state => state.myId)

	return isAuth && myId !== userId;
};

