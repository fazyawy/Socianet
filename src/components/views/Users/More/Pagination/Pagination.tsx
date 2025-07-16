import styles from "./Pagination.module.scss"
import { usePagination } from "./usePagination";

export const Pagination = ({ pageCount }: { pageCount: number }) => {

	const { setFirstPage,
		setLastPage,
		setPrevPage,
		setNextPage,
		prevPage,
		nextPage } = usePagination(pageCount)


	return (
		<div className={styles.pagination}>

			{prevPage >= 1 && (
				<>
					<button onClick={setFirstPage}>{"<<"}</button>
					<button onClick={setPrevPage}>{"<"}</button>
					<button onClick={setFirstPage}>{1}</button>

					{prevPage !== 1 && (
						<>
							{prevPage - 1 !== 1 && <span>...</span>}
							<button onClick={setPrevPage}>{prevPage}</button>
						</>
					)}
				</>
			)}


			<button className={styles.active}>{nextPage - 1}</button>


			{nextPage <= pageCount && (
				<>
					{nextPage !== pageCount && (
						<>
							<button onClick={setNextPage}>{nextPage}</button>
							{nextPage + 1 !== pageCount && <span>...</span>}
						</>
					)}

					<button onClick={setLastPage}>{pageCount}</button>
					<button onClick={setNextPage}>{">"}</button>
					<button onClick={setLastPage}>{">>"}</button>
				</>
			)}

		</div>
	)
};