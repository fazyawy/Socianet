import { create } from "zustand";
import { IMyAvatarStore } from "./store.type";

export const useMyAvatarStore = create<IMyAvatarStore>((set) => ({
	myAvatar: "https://i.pravatar.cc/150?img=6",
	setMyAvatar: (changedValue) => set(() => ({ myAvatar: changedValue }))
}));

