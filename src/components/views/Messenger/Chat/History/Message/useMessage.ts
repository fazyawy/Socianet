import { useState } from "react";

export const useMessage = () => {

	const [isShow, setIsShow] = useState<boolean>(false);

	return {
		isShow,
		toggleIsShow: () => setIsShow(!isShow)
	}
};

