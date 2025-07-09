import { create } from "zustand";

import { IProfile } from "@/shared/types/profile.type";
import { IMyProfileStore } from "./types/myProfile.types";

const initialProfileState: IProfile = {
	userId: 32475,
	aboutMe: "",
	lookingForAJob: false,
	lookingForAJobDescription: "not",
	fullName: "fazyawy",
	contacts: {
		github: "",
		vk: "",
		facebook: "",
		instagram: "",
		twitter: "",
		website: "",
		youtube: "",
		mainLink: "",
	},
	photos: {
		small: "",
		large: ""
	},
}

export const useMyProfileStore = create<IMyProfileStore>((set) => ({
	myId: 2,
	setMyId: (changedValue) => set(() => ({ myId: changedValue })),

	myProfile: initialProfileState,
	setMyProfile: (changedValue) => set(() => ({ myProfile: { ...changedValue, lookingForAJobDescription: initialProfileState.lookingForAJobDescription } })),

	status: null,
	setStatus: (changedValue) => set(() => ({ status: changedValue }))
}));

