import { BaseSyntheticEvent, useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { USERS_QUERY_KEY } from "@/constants/queryKeys.const";

import { useSearchUsersStore } from "@/store/searchUsers.store";

import { useDebounce } from "@/hooks/useDebounce";

export const useSearch = (isFriendsPage: boolean) => {

	const { searchValue, setSearchValue } = useSearchUsersStore(state => state);

	const onChange = (e: BaseSyntheticEvent) => {
		setSearchValue(e.target.value);
	}

	const onClearClick = () => {
		setSearchValue("");
	}

	const queryClient = useQueryClient();

	const refetchUsersList = () => queryClient.invalidateQueries({
		queryKey: [USERS_QUERY_KEY]
	})

	const debouncedRefetch = useDebounce(refetchUsersList, 500);

	useEffect(() => {
		debouncedRefetch();
	}, [searchValue])

	return {
		input: {
			value: searchValue,
			onChange
		},

		title: isFriendsPage ? "Friends" : "Users",

		onClearClick
	}
};

