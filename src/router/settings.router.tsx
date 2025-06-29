import { Settings } from "@/components/views/Settings/Settings";
import { Profile } from "@/components/views/Settings/views/Profile/Profile";

export const settingsRoutes = {
	path: "settings",
	element: <Settings />,
	children: [
		{
			path: "profile",
			element: <Profile />
		}
	]
}
