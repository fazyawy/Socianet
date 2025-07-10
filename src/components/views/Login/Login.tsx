import styles from "./Login.module.scss"

import { useLogin } from "./useLogin";

import { Navigate } from "react-router";

import { FormInput } from "@/components/common/FormInput/FormInput";

import { emailValidator } from "@/shared/validators/email.validator";
import { requiredValidator } from "@/shared/validators/required.validator";

export const Login = () => {

	const { onSubmit, register, errors, rememberMeId, isAuth } = useLogin();

	if(isAuth) {
		return <Navigate to="/" />
	}

	return (
		<main className={styles.login}>

			<form onSubmit={onSubmit} className={styles.login_form}>
				<h2>Login</h2>

				<FormInput
					type="email"
					title={"email"}
					register={register("email", emailValidator(5))}
					errors={errors.email}
					label="Your email"
					placeholder="ex. email@email.com" />

				<FormInput
					type="text"
					title={"password"}
					register={register("password", requiredValidator)}
					errors={errors.password}
					label="Your password"
					placeholder="ex. qwerty123" />

				<div className={styles.rememberMe}>
					<label htmlFor={rememberMeId}>Remember me</label>
					<input
						id={rememberMeId}
						type="checkbox"
						title="remember me"
						{...register("rememberMe")} />
				</div>

				<button type="submit" className={styles.login_submit}>Send</button>
			</form>

		</main>
	)
};

