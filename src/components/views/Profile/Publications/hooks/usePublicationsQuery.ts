import { useQuery } from "@tanstack/react-query";

import publicationsService from "@/services/publications.service";

export const usePublicationsQuery = (isAuth: boolean) => {
	return useQuery({
		queryKey: ['publications'],
		queryFn: publicationsService.getPublications,

		select: ({data}) => data,
		enabled: isAuth === true
	})
};

