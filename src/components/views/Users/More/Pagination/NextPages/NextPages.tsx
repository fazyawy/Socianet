import { useNextPages } from "./useNextPages";

export const NextPages = ({pageCount}: {pageCount: number}) => {

	const { nextPage, setNextPage, setLastPage } = useNextPages(pageCount);

	return (
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
	)
};

