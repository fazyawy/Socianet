import styles from "./Input.module.scss"
import { IInput } from "./input.type";

export const Input = ({ register, inputMode = "text", id, title, placeholder, type = "text", className }: IInput) => {
	return (
		<input
			inputMode={inputMode}
			id={id}
			placeholder={placeholder}
			title={title}
			type={type}
			className={`${styles.input_field} ${className}`}
			{...register}
			data-testid={"input"}/>
	)
};

