import styles from "./FormInput.module.scss"

import { useId } from "react";
import { FaTimes } from "react-icons/fa";

import { IFormInput } from "./FormInput.type";
import { Input } from "@/components/common/Input/Input";

export const FormInput = ({ type = "text", title, label, placeholder, register, errors, className }: IFormInput) => {

	const inputId = useId()

	return (
		<div className={`${styles.input_container} ${className}`} data-testid={"form input"}>
			<label htmlFor={inputId}>{label}</label>

			<div className={styles.input}>
				{type === "textarea" ?
					<textarea
						className={styles.input_field}
						inputMode={"text"}
						id={inputId}
						placeholder={placeholder}
						title={title}
						{...register}
						data-testid={"input"} /> :
					<Input
						id={inputId}
						type={type}
						placeholder={placeholder}
						title={title}
						register={register} />}


				<button className={styles.clear} title="Clear input value" type={"reset"}>
					<FaTimes className={styles.icon} />
				</button>

			</div>

			{errors && (
				<span className={styles.error}>
					{errors.message}
				</span>
			)}
		</div>
	)
};

