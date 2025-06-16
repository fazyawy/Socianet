import { usePaginationStore } from "@/store/usePaginationStore";

import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { useShallow } from "zustand/shallow";

import { IUsers } from "./Users.type";

import usersService from "@/services/users.service";
import { USERS_QUERY_KEY } from "@/constants/queryKeys.const";
import { useAuthStore } from "@/store/useAuthStore";

export const useUsers = () => {
	const { pathname } = useLocation();
	const isFriendsPage = pathname === "/friends"

	const [maxShowedUsers, setMaxShowedUsers] = useState<number>(6);

	const [currentPage, setCurrentPage] = usePaginationStore(useShallow(state => [state.currentPage, state.setCurrentPage]));
	const isAuth = useAuthStore(state => state.isAuth)


	const { data, isLoading, refetch } = useQuery({
		queryKey: USERS_QUERY_KEY,
		queryFn: usersService.getUsers<IUsers>(maxShowedUsers, currentPage, isFriendsPage),
		select: ({ data }) => data,
		retry: 2,
		enabled: isAuth ? isFriendsPage : true,
	})

	useEffect(() => {
		refetch();
	}, [maxShowedUsers, currentPage, isFriendsPage])

	const upMaxShowedUsers = () => {
			setMaxShowedUsers(state => state += 6);

			const pageCountTimed = data ? Math.ceil(data.totalCount / (maxShowedUsers + 6)) : 0;

			if (currentPage >= pageCountTimed) setCurrentPage(pageCountTimed);
		}

	return {
		upMaxShowedUsers,

		pageCount: data ? Math.ceil(data.totalCount / maxShowedUsers) : 0,
		maxShowedUsers,


		data,
		isLoading,
		isFriendsPage,
		refetch
	}
};

