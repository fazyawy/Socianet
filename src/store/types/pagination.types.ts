export interface IPaginationStore {
	currentPage: number,
	setCurrentPage: (value: number) => void,
}