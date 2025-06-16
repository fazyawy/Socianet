import { useId } from "react";
import styles from "./FormInput.module.scss"
import { IFormInput } from "./FormInput.type";
import { FaTimes } from "react-icons/fa";

export const FormInput = ({ type = "text", title, label, placeholder, register, errors }: IFormInput) => {

	const inputId = useId()

	return (
		<div className={styles.input_container}>
			<label htmlFor={inputId}>{label}</label>

			<div className={styles.input}>
				<input
					id={inputId}
					type={type}
					placeholder={placeholder}
					title={title}
					{...register} />

				<button className={styles.clear} title="Clear input value" type={"reset"}>
					<FaTimes className={styles.icon} />
				</button>
			</div>

			{errors && (
				<span className={styles.error}>
					{errors.type === "required" && errors.message}
					{errors.type === "minLength" && `The length of ${name} is from 5 symbools`}
				</span>
			)}
		</div>
	)
};

