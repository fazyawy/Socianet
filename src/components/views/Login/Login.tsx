import styles from "./Login.module.scss"

import { useLogin } from "./useLogin";

import { Navigate } from "react-router";

import { FormInput } from "@/components/common/FormInput/FormInput";

import { emailValidator } from "@/shared/validators/email.validator";
import { requiredValidator } from "@/shared/validators/required.validator";
import { Input } from "@/components/common/Input/Input";
import { Preloader } from "@/components/UI/Preloader/Preloader";

export const Login = () => {

	const { onSubmit, register, errors, rememberMeId, isAuth, isPending } = useLogin();

	if (isAuth) {
		return <Navigate to="/" />
	}

	return (
		<main className={styles.login} data-testid="main">

			{isPending && <Preloader />}

			{!isPending && <form onSubmit={onSubmit} className={styles.login_form} data-testid="login form">
				<h2>Login</h2>

				<FormInput
					inputData={{
						type: "email", title: "email", register: register("email", emailValidator(5)),
						label: "Your email", placeholder: "ex. email@email.com"
					}}
					testid="login email"
					errors={errors.email} />

				<FormInput
					inputData={{
						type: "text", title: "password", register: register("password", requiredValidator),
						label: "Your password", placeholder: "ex. qwerty123"
					}}
					testid="login password"
					errors={errors.password} />

				<div className={styles.rememberMe}>
					<label htmlFor={rememberMeId}>Remember me</label>
					<Input
						id={rememberMeId}
						type="checkbox"
						title="remember me"
						{...register("rememberMe")} />
				</div>

				<button type="submit" className={styles.button} data-testid={"login send"}>Send</button>
			</form>}

		</main>
	)
};

