import styles from "./StatusInput.module.scss"

import { IStatusInput } from "./statusInput.type";
import { useStatusInput } from "./useStatusInput";

import { Input } from "@/components/common/Input/Input";

export const StatusInput = ({ setHaveStatusInput }: IStatusInput) => {

	const {input: { onClick, ...input }} = useStatusInput({ setHaveStatusInput });

	return (
		<>
			<Input
				className={styles.status_input}
				title="Set new status"
				type="text"
				register={input} />

			<button onClick={onClick} className={styles.button}>save</button>
		</>
	)
};

