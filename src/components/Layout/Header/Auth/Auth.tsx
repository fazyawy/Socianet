import styles from "./Auth.module.scss"

import { useAuth } from "./useAuth";

import { Link } from "react-router";

import { AuthMenu } from "./AuthMenu/AuthMenu";

export const Auth = () => {

	const { isAuth, isLogin } = useAuth();

	return (
		<div className={styles.auth}>
			{isAuth && <AuthMenu />}

			{!isAuth && !isLogin && <Link to={"/auth/login"} className={styles.auth_login}>
				<button className={styles.button}>login</button>
			</Link>}
		</div>
	)
};

