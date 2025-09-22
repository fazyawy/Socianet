import { RouteObject } from "react-router";

import { IRender } from "@/tests/types/render.type";

export function createChildRoute({paths, element}: Required<IRender>): RouteObject[] {
	return paths.map((path: string) => {
			if(path === "/") return { index: true, element }

			const pathUpd = path.split("/");

			if(pathUpd.length <= 2) return { path, element };
			return {
				path: pathUpd[0],
				children: createChildRoute({paths: [pathUpd.slice(1).join("/")], element})
			}
		})
}