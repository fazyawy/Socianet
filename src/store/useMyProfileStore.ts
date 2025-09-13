import { create } from "zustand";

import { IProfile } from "@/shared/types/profile.type";
import { IMyProfileStore } from "./types/myProfile.types";

const initialProfileState: IProfile = {
	userId: 32602,
	aboutMe: null,
	lookingForAJob: false,
	lookingForAJobDescription: null,
	fullName: "wookong",
	contacts: {
		github: null,
		vk: null,
		facebook: null,
		instagram: null,
		twitter: null,
		website: null,
		youtube: null,
		mainLink: null,
	},
	photos: {
		small: null,
		large: null
	},
}

export const useMyProfileStore = create<IMyProfileStore>((set) => ({
	myId: 2,
	setMyId: (changedValue) => set(() => ({ myId: changedValue })),

	myProfile: initialProfileState,
	setMyProfile: (changedValue) => set(() => ({ myProfile: { ...changedValue, lookingForAJobDescription: "" } })),

	status: null,
	setStatus: (changedValue) => set(() => ({ status: changedValue }))
}));

