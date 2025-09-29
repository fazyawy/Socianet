export type AvatarType = "large" | "bigger" | "big" | "middle" | "small" | "smaller";

export interface IAvatar {
	className?: string,
	src?: string | null,
	type: AvatarType,
	haveOnlineStatus?: boolean,
	isOnline?: boolean,
	onlineStyle?: string
}