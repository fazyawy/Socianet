import { IPaginationStore } from "../types/pagination.types";

export const getCurrentPageSelector = (state: IPaginationStore) => state.currentPage;

export const getCurrentPageAdvancedSelector = (state: IPaginationStore) => ({ currentPage: state.currentPage, setCurrentPage: state.setCurrentPage});