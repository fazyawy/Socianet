import { getCurrentPageAdvancedSelector } from "@/store/selectors/currentPage.selector";
import { usePaginationStore } from "@/store/usePaginationStore";
import { useShallow } from "zustand/shallow";

export const usePrevPages = () => {

	const { currentPage, setCurrentPage } = usePaginationStore(useShallow(getCurrentPageAdvancedSelector));

	const prevPage: number = currentPage - 1;

	return {
		setFirstPage: () => setCurrentPage(1),
		setPrevPage: () => setCurrentPage(prevPage),

		prevPage
	}
};

