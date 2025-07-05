import styles from "./NameStatus.module.scss"

import { useNameStatus } from "./useNameStatus";

import { FaPen } from "react-icons/fa";

import { Preloader } from "@/components/UI/Preloader/Preloader";
import { StatusInput } from "./StatusInput/StatusInput";

interface INameStatus {
	name?: string,
	userId: number,
	isMyProfile: boolean
}

export const NameStatus = ({ name, userId, isMyProfile }: INameStatus) => {

	const { isStatusLoading, status, haveStatusInput, toggleStatusInput } = useNameStatus(userId, isMyProfile);

	return (
		<div className={styles.nameStatus_container}>
			<h1 className={styles.name}>{name || "fazyawy"}</h1>

			<div className={styles.status_container}>
				<h3 className={isMyProfile && status ? styles.status : ""} onClick={toggleStatusInput}>{isStatusLoading ? <Preloader /> : status}{isMyProfile && status && <FaPen className={styles.status_pen} size={10} />}</h3>

				{haveStatusInput &&
						// <Profile isSettings={false}/>
						<StatusInput toggleStatusInput={toggleStatusInput} />
						}
			</div>

		</div>
	)
};

