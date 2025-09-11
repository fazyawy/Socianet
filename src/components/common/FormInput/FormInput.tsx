import styles from "./FormInput.module.scss"

import { FaTimes } from "react-icons/fa";

import { IFormInput } from "./FormInput.type";
import { Input } from "@/components/common/Input/Input";
import { useFormInput } from "./useFormInput";
import { Errors } from "./Errors/Errors";

export const FormInput = ({ inputData: {type = "text", title, label, placeholder, register}, errors, className, testid }: IFormInput) => {

	const { inputId, input } = useFormInput(register);

	return (
		<div className={`${styles.input_container} ${className}`} data-testid={testid}>
			<label htmlFor={inputId}>{label}</label>

			<div className={styles.input} data-testid={"form input"}>
				{type === "textarea" ?
					<textarea
						className={styles.input_field}
						inputMode={"text"}
						id={inputId}
						placeholder={placeholder}
						title={title}
						{...input}
						data-testid={"input"} /> :
					<Input
						id={inputId}
						type={type}
						placeholder={placeholder}
						title={title}
						register={input} />}


				<button className={styles.clear} title="Clear input value" type={"reset"} data-testid={"clear input btn"}>
					<FaTimes className={styles.icon} />
				</button>

			</div>

			{errors && <Errors message={errors.message}/>}
		</div>
	)
};

