import styles from "./Input.module.scss"
import { IInput } from "./input.type";
import { useInputComp } from "./useInputComp";

export const Input = ({ register, inputMode = "text", id, title, placeholder, type = "text", className }: IInput) => {

	const input = useInputComp(register, type);

	return (
		<input
			inputMode={inputMode}
			id={id}
			placeholder={placeholder}
			title={title}
			type={type}
			className={`${styles.input_field} ${className}`}
			{...input}
			data-testid={"input"}/>
	)
};

