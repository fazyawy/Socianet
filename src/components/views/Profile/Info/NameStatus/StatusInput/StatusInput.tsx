import styles from "./StatusInput.module.scss"

import { IStatusInput } from "./statusInput.type";
import { useStatusInput } from "./useStatusInput";

import { Input } from "@/components/common/Input/Input";

export const StatusInput = ({ toggleStatusInput }: IStatusInput) => {

	const input = useStatusInput({ toggleStatusInput });

	return (
		<Input
			className={styles.status_input}
			title="Set new status"
			type="text"
			register={input} />
	)
};

