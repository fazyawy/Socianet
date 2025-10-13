import { expect, test, describe } from "vitest"
import { waitFor } from "@testing-library/react";


import { renderHookWithQuery } from "@/tests/helpers/renderHookWithQuery";
import { IPublications } from "@/services/types/publications.type";

import { usePublicationsQuery } from "./hooks/usePublicationsQuery";

describe("PUBLICATIONS HOOK TESTS", () => {

	let response: IPublications[]

	beforeEach(() => {
		response = [
				{
					body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
					id: 1,
					title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
					userId: 1,
				},
				{
					body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
					id: 2,
					title: "qui est esse",
					userId: 1,
				},
				{
					body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
					id: 3,
					title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
					userId: 1,
				},
			]
	})

	test("usePublications tests", async () => {
		const { result } = renderHookWithQuery<typeof usePublicationsQuery>(usePublicationsQuery, true);

		await waitFor(() => {
			return expect(result.current?.isSuccess).toBe(true);
		})

		expect(result.current.data.slice(0, 3)).toEqual(response);
		expect(result.current.data.length).toBe(100);
	})
})