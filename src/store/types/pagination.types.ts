export interface IPaginationStore {
	currentPage: number,
	maxShowedUsers: number,
	upperShowedUsers: number,

	setCurrentPage: (value: number) => void,
	upMaxShowedUsers: () => void,
	setMaxShowedUsers: (value: number) => void
}