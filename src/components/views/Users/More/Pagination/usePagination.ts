import { useShallow } from "zustand/shallow";

import { usePaginationStore } from "@/store/usePaginationStore";
import { IPaginationStore } from "@/store/store.type";

export const usePagination = (pageCount: number) => {

	const [currentPage, setCurrentPage] = usePaginationStore(useShallow((state: IPaginationStore) => ([state.currentPage, state.setCurrentPage])))

	const setCurrentPageAdds = (page: number) => {
		setCurrentPage(page);
	}

	const prevPage = currentPage - 1;
	const nextPage = currentPage + 1;

	return {
		setFirstPage: () => setCurrentPageAdds(1),
		setLastPage: () => setCurrentPageAdds(pageCount),
		setPrevPage: () => setCurrentPageAdds(prevPage),
		setNextPage: () => setCurrentPageAdds(nextPage),
		prevPage,
		nextPage
	}
};

