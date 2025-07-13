import { createBrowserRouter } from "react-router";

import { Layout } from "@/components/Layout/Layout";
import { Profile } from "@/components/views/Profile/Profile";
import { Users } from "@/components/views/Users/Users";
import { Messenger } from "@/components/views/Messenger/Messenger";
import { Login } from "@/components/views/Login/Login";
import { Preloader } from "@/components/UI/Preloader/Preloader";

import { settingsRoutes } from "./settings.router";

const routes = [
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Profile />
			},
			{
				path: ":id",
				element: <Profile />
			},
			{
				path: "users/",
				element: <Users />
			},
			{
				path: "messenger",
				element: <Messenger />
			},
			{
				path: "news",
				element: <main>news</main>
			},
			{
				path: "music",
				element: <main>music</main>
			},
			{
				path: "friends",
				element: <Users />
			},
			{
				path: "auth",
				children: [
					{
						path: "login",
						element: <Login />
					}
				]
			},
			{
				path: "preloader",
				element: <Preloader />
			},
			{...settingsRoutes}
		]
	}
];

export const router = createBrowserRouter(routes);

export default routes;