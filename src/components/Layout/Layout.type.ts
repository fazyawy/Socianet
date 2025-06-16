export interface IAuthData {
	resultCode: number,
	messages: [] | string[],
	fieldsErrors: [] | string[],
	data: {
		id: number,
		login: string,
		email: string
	}
}