import { IResponse } from "./services.type"

export interface ILoginResponse extends IResponse {
	data: {
		userId: number,
		token?: string
	} | {}
}

export interface IAuthData extends IResponse {
	data: {
		id?: number,
		login?: string,
		email?: string
	}
}