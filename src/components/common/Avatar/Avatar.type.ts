export interface IAvatar {
	src: string,
	type: "large" | "bigger" | "big" | "middle" | "small" | "smaller",
	haveOnlineStatus?: boolean,
	isOnline?: boolean,
	onlineStyle?: string
}