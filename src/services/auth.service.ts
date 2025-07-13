import { instance } from "./api";

import { ILogin } from "@/shared/types/login.type";

import { IAuthData, ILoginResponse } from './types/auth.types';

class AuthService {
	#BASE_URL: string = "auth/";

	getAuth = async() => await instance.get<IAuthData>(`${this.#BASE_URL}me`)

	login = async({email, password, rememberMe, captcha = true}: ILogin) => await instance.post<ILoginResponse>(`${this.#BASE_URL}login`, {
		email,
		password,
		rememberMe,
		captcha
	})

	logout = async() => await instance.delete(`${this.#BASE_URL}login`)
}

export default new AuthService()