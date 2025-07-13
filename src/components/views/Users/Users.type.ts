import { IUser } from "./User/User.type";

export interface IUsers {
	items: IUser[],
	error: null | string,
	totalCount: number
}