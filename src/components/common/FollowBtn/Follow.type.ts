export interface IFollow {
	resultCode: number,
	messages: string[],
	data: {}
}

export interface IFollowBtn {
	isFollowed?: boolean,
	userId: number,
	className?: string
}