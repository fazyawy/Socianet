import styles from "./StatusInput.module.scss"

import { IStatusInput } from "./statusInput.type";
import { useStatusInput } from "./useStatusInput";

import { Input } from "@/components/common/Input/Input";

export const StatusInput = ({ toggleStatusInput }: IStatusInput) => {

	const {onClick, ...input} = useStatusInput({ toggleStatusInput });

	return (
		<div className={styles.status_input}>
			<Input
			title="Set new status"
			type="text"
			register={input} />

			<button onClick={onClick}>save</button>
		</div>
	)
};

