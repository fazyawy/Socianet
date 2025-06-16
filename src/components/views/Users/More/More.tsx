import styles from "./More.module.scss"
import { Pagination } from "./Pagination/Pagination";

interface IMoreProps {
	upMaxShowedUsers: () => void,
	pageCount: number
}

export const More = ({upMaxShowedUsers, pageCount}: IMoreProps) => {

	return (
		<div className={styles.more}>
			<button className={styles.morebtn} onClick={upMaxShowedUsers}>show more</button>
			<Pagination pageCount={pageCount} />
		</div>
	)
};

