import { useAuthStore } from "@/store/useAuthStore";
import { getIsAuthSelector } from "@/store/selectors/auth.selector";

import { usePublicationsQuery } from "./hooks/usePublicationsQuery";

export const usePublications = () => {

	const isAuth = useAuthStore(getIsAuthSelector)

	return usePublicationsQuery(!!isAuth);
};

