import { createBrowserRouter } from "react-router";

import { createChildRoute } from "./createChildRoute";

import { IRender } from "@/tests/types/render.type";

export const createRouter = ({ paths = ["/"], element }: IRender) => createBrowserRouter([{
	path: "/",
	element,
	children: createChildRoute({ paths, element })
}]);

