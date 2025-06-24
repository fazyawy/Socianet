import { useInput } from "@/hooks/useInput";
import styles from "./NameStatus.module.scss"

import { Preloader } from "@/components/UI/Preloader/Preloader";

interface INameStatus {
	name?: string,
	isStatusLoading: boolean,
	status?: string,
	isMyProfile: boolean
}

export const NameStatus = ({ name, isStatusLoading, status, isMyProfile }:INameStatus) => {

	const input = useInput();

	return (
		<div className={styles.name_status}>
			<h1>{name || "fazyawy"}</h1>
			<h3>{isStatusLoading ? <Preloader /> : status || input.value}</h3>
			{ isMyProfile && <input type="text" {...input} />}
		</div>
	)
};

