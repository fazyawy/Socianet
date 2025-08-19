import { usePaginationStore } from "@/store/usePaginationStore";
import { useState } from "react";

export const useAside = () => {
	const [ haveAside, setHaveAside ] = useState<boolean>(true);

	const setMaxShowedUsers = usePaginationStore(state => state.setMaxShowedUsers);

	const toggleHaveAside = () => {

		if(haveAside) setMaxShowedUsers(8);
		else setMaxShowedUsers(6);

		setHaveAside(prev => !prev);
	}

	return {
		haveAside,
		toggleHaveAside
	}
};

