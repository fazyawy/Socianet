import { useEffect } from "react";
import { useLocation } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { useShallow } from "zustand/shallow";

import { IUsers } from "./Users.type";

import usersService from "@/services/users.service";

import { USERS_QUERY_KEY } from "@/constants/queryKeys.const";

import { usePaginationStore } from "@/store/usePaginationStore";
import { useAuthStore } from "@/store/useAuthStore";
import { getIsAuthSelector } from "@/store/selectors/auth.selector";
import { useSearchUsersStore } from "@/store/searchUsers.store";
import { useToggle } from "@/hooks/useToggle";

export const useUsers = () => {
	const { pathname } = useLocation();
	const isFriendsPage = pathname === "/friends"

	const [currentPage, maxShowedUsers, setCurrentPage, upperShowedUsers] = usePaginationStore(useShallow(state => [state.currentPage, state.maxShowedUsers, state.setCurrentPage, state.upperShowedUsers]));
	const isAuth = useAuthStore(getIsAuthSelector);
	const searchValue = useSearchUsersStore(state => state.searchValue)


	const { data: usersData, isPending, refetch } = useQuery({
		queryKey: [USERS_QUERY_KEY, { page: currentPage }],
		queryFn: usersService.getUsers<IUsers>(maxShowedUsers, currentPage, isFriendsPage, searchValue),

		select: ({ data }) => data,
		retry: 2,
		enabled: isAuth === false ? !isFriendsPage : true,
	})

	useEffect(() => {
		if (isFriendsPage) setCurrentPage(1);
		refetch();
	}, [maxShowedUsers, currentPage, isFriendsPage])

	const [isSearch, toggleIsSearch] = useToggle(false);


	return {
		pageCount: usersData ? Math.ceil(usersData.totalCount / maxShowedUsers) : 0,

		usersData,
		isPending,
		isFriendsPage,
		haveAside: upperShowedUsers === 6,

		search: {
			isSearch,
			toggleIsSearch: () => {
				toggleIsSearch();
				setCurrentPage(1);
			},
		}
	}
};

