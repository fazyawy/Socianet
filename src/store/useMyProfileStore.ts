import { create } from "zustand";

import { IProfile } from "@/shared/types/profile.type";
import { IMyProfileStore } from "./types/myProfile.types";

const initialState: IProfile = {
	userId: 2,
	aboutMe: null,
	lookingForAJob: false,
	lookingForAJobDescription: null,
	fullName: "fazyawy",
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
		small: "https://i.pravatar.cc/150?img=6",
		large: "https://i.pravatar.cc/150?img=6"
	},
}

export const useMyProfileStore = create<IMyProfileStore>((set) => ({
	myId: 2,
	setMyId: (changedValue) => set(() => ({ myId: changedValue })),
	myProfile: initialState,
	setMyProfile: (changedValue) => set(() => ({ myProfile: changedValue }))
}));

