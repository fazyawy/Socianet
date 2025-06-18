import { IProfile } from "@/shared/types/profile.type";

export interface IPaginationStore {
	currentPage: number,
	setCurrentPage: (value: number) => void,
}

export interface IAuthStore {
	isAuth: boolean | null,
	setIsAuth: (value: boolean) => void,
}

export interface IMyAvatarStore {
	myAvatar: string,
	setMyAvatar: (value: string) => void,
}

export interface IMyProfileStore {
	myId: number,
	setMyId: (value: number) => void,
	myProfile: IProfile,
	setMyProfile: (value: IProfile) => void,
}