import { IResponse } from "./services.type"

export interface ILoginResponse extends IResponse {
	data: {
		userId: number
	}
}

export interface IAuthData {
	resultCode: number,
	messages?: [] | string[],
	fieldsErrors?: [] | string[],
	data: {
		id: number,
		login: string,
		email: string
	}
}