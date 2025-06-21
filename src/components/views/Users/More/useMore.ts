import { usePaginationStore } from "@/store/usePaginationStore";

export const useMore = (pageCount: number, totalCount: number) => {

	const { maxShowedUsers, upMaxShowedUsers, currentPage, setCurrentPage } = usePaginationStore()

	const changeMaxShowedUsers = () => {
		upMaxShowedUsers();

		const pageCountTimed = Math.ceil(totalCount / (maxShowedUsers + 6));

		if (currentPage >= pageCount) setCurrentPage(pageCountTimed);
	}

	return {
		onClick: changeMaxShowedUsers,
		isMore: maxShowedUsers <= totalCount
	}
};

