export interface IContact {
	id: number,
	avatar: string,
	isOnline: boolean,
	name: string,
	message_time: string,
	message_preview: string,
	unreadBadge?: number,
	isActive: boolean
}