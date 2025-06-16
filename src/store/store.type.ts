export interface IPaginationStore {
	currentPage: number,
	setCurrentPage: (value: number) => void,
}

export interface IAuthStore {
	isAuth: boolean,
	setIsAuth: (value: boolean) => void,
}

export interface IMyAvatarStore {
	myAvatar: string,
	setMyAvatar: (value: string) => void,
}