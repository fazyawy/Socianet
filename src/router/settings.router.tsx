import { SettingsProfile } from "@/components/views/SettingsProfile/SettingsProfile";
import { SettingsCustom } from "@/components/views/SettingsCustom/SettingsCustom";

export const settingsRoutes = {
	path: "settings",
	children: [
		{
			path: "profile",
			element: <SettingsProfile />
		},
		{
			path: "custom",
			element: <SettingsCustom />
		}
	]
}
