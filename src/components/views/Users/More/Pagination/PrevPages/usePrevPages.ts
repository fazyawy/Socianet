import { getCurrentPageAdvancedSelector } from "@/store/selectors/currentPage.selector";
import { usePaginationStore } from "@/store/usePaginationStore";

export const usePrevPages = () => {

	const { currentPage, setCurrentPage } = usePaginationStore(getCurrentPageAdvancedSelector);

	const prevPage: number = currentPage - 1;

	return {
		setFirstPage: () => setCurrentPage(1),
		setPrevPage: () => setCurrentPage(prevPage),

		prevPage
	}
};

