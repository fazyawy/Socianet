import { usePaginationStore } from "@/store/usePaginationStore";
import { getCurrentPageSelector } from "@/store/selectors/currentPage.selector";

export const usePagination = (pageCount: number) => {

	const currentPage = usePaginationStore(getCurrentPageSelector);

	return {
		havePrevPage: currentPage - 1 >= 1,
		haveNextPage: currentPage + 1 <= pageCount,
		currentPage
	}
};

