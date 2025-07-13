export interface IAuthStore {
	isAuth: boolean | null,
	setIsAuth: (value: boolean) => void,
}