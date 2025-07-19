import { usePrevPages } from "./usePrevPages";

export const PrevPages = () => {

	const { setFirstPage, setPrevPage, prevPage } = usePrevPages();

	return (
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
	)
};

