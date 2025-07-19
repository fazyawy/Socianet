import styles from "./Pagination.module.scss"

import { usePagination } from "./usePagination";

import { NextPages } from "./NextPages/NextPages";
import { PrevPages } from "./PrevPages/PrevPages";

export const Pagination = ({ pageCount }: { pageCount: number }) => {

	const { havePrevPage, haveNextPage, currentPage } = usePagination(pageCount)

	return (
		<div className={styles.pagination}>

			{havePrevPage && <PrevPages />}


			<button className={styles.active}>{currentPage}</button>


			{haveNextPage && <NextPages pageCount={pageCount} />}

		</div>
	)
};