// export interface IPaginationStore {
// 	currentPage: number,
// 	setCurrentPage: (value: number) => void,
// }

export interface IPaginationStore {
	currentPage: number,
	maxShowedUsers: number,

	setCurrentPage: (value: number) => void,
	upMaxShowedUsers: () => void,
}