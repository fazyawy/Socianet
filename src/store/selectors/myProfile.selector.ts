import { IMyProfileStore } from "@/store/types/myProfile.types";

import { useShallow } from "zustand/shallow";

export const getMyProfile = () => {
	console.warn("Just take profile")
	useShallow((state: IMyProfileStore) => [state.myId, state.myProfile])
};

