export interface IUser {
	id: number,
	followed: boolean,
	name: string
	photos: {
		small: null | string,
		large: null | string
	}
	status: null | string
	uniqueUrlName: null | string
}