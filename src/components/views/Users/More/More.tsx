import styles from "./More.module.scss"

import { useMore } from "./useMore";

import { Pagination } from "./Pagination/Pagination";
import { memo } from "react";

interface IMoreProps {
	pageCount: number,
	totalCount: number
}

export const More = memo(({ pageCount, totalCount }: IMoreProps) => {

	const { onClick, isMore } = useMore(pageCount, totalCount);

	console.log("render more")

	if(!isMore) return;

	return (
		<div className={styles.more}>
			<button className={styles.button} onClick={onClick}>show more</button>
			<Pagination pageCount={pageCount} />
		</div>
	)
});

