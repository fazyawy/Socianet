import { useShallow } from "zustand/shallow";
import { IPaginationStore } from "../types/pagination.types";

export const getCurrentPageSelector = (state: IPaginationStore) => state.currentPage;

export const getCurrentPageAdvancedSelector = useShallow((state: IPaginationStore) => ({ currentPage: state.currentPage, setCurrentPage: state.setCurrentPage}));