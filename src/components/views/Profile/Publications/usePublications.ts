import { useQuery } from "@tanstack/react-query";
import { useAuthStore } from "@/store/useAuthStore";
import { getIsAuthSelector } from "@/store/selectors/auth.selector";
import publicationsService from "@/services/publications.service";

export const usePublications = () => {

	const isAuth = useAuthStore(getIsAuthSelector)

	return useQuery({
		queryKey: ['publications'],
		queryFn: publicationsService.getPublications,

		select: ({data}) => data,
		enabled: isAuth === true
	})
};

