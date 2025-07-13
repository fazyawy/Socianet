import { IProfile } from "@/shared/types/profile.type";

export interface IMyProfileStore {
	myId: number,
	setMyId: (value: number) => void,

	myProfile: IProfile,
	setMyProfile: (value: IProfile) => void,

	status: string | null,
	setStatus: (value: string) => void
}