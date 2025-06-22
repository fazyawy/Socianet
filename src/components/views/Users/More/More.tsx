import styles from "./More.module.scss"

import { useMore } from "./useMore";

import { Pagination } from "./Pagination/Pagination";

interface IMoreProps {
	pageCount: number,
	totalCount: number
}

export const More = ({ pageCount, totalCount }: IMoreProps) => {

	const { onClick, isMore } = useMore(pageCount, totalCount);

	if(!isMore) return;

	return (
		<div className={styles.more}>
			<button className={styles.morebtn} onClick={onClick}>show more</button>
			<Pagination pageCount={pageCount} />
		</div>
	)
};

