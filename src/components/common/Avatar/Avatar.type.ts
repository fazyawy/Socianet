export interface IAvatar {
	className?: string,
	src?: string | null,
	type: "large" | "bigger" | "big" | "middle" | "small" | "smaller",
	haveOnlineStatus?: boolean,
	isOnline?: boolean,
	onlineStyle?: string
}