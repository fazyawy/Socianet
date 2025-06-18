import { JSX } from "react";

import { Preloader } from "@/components/UI/Preloader/Preloader";

import { useAuthStore } from "@/store/useAuthStore";
import { Navigate } from "react-router";

interface IAuthRedirect {
	children: JSX.Element
	to: string
	haveAdds: boolean
}

export const AuthRedirect = ({ children, to, haveAdds = true }: IAuthRedirect) => {

	const isAuth = useAuthStore(state => state.isAuth);

	if(isAuth === false && haveAdds) {
		return <Navigate to={to} />
	}
	else if (isAuth) {
		return children;
	}

	return <Preloader />
};

