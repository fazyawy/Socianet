import { getCurrentPageAdvancedSelector } from "@/store/selectors/currentPage.selector";
import { usePaginationStore } from "@/store/usePaginationStore";

export const useNextPages = (pageCount: number) => {

	const { currentPage, setCurrentPage } = usePaginationStore(getCurrentPageAdvancedSelector);

	const nextPage: number = currentPage + 1;

	return {
		setLastPage: () => setCurrentPage(pageCount),
		setNextPage: () => setCurrentPage(nextPage),

		nextPage
	}
};

