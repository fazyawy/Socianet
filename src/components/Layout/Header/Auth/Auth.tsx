import styles from "./Auth.module.scss"

import { useAuthStore } from "@/store/useAuthStore";

import { Link } from "react-router";

import { AuthMenu } from "./AuthMenu/AuthMenu";

export const Auth = () => {

	const isAuth = useAuthStore(state => state.isAuth)

	return (
		<div className={styles.auth}>
			{isAuth && <AuthMenu />}

			{!isAuth && <Link to={"/auth/login"} className={styles.auth_login}>
				<button>login</button>
			</Link>}
		</div>
	)
};

