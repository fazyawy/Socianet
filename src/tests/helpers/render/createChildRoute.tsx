import { RouteObject } from "react-router";

import { IRenderWithRouter } from "./renderWithRouter.type";

export function createChildRoute({paths, element}: Required<IRenderWithRouter>): RouteObject[] {
	return paths.map((path: string) => {
			if(path === "/") return { index: true, element }

			const pathUpd = path.split("/");

			if(pathUpd.length === 1) return { path, element };
			return {
				path: pathUpd[0],
				children: createChildRoute({paths: [pathUpd.slice(1).join("/")], element})
			}
		})
}