import { IResponse } from './../shared/types/response.type';
import { ILogin } from "@/shared/types/login.type";
import { instance } from "./api";

interface ILoginResponse extends IResponse {
	data: {
		userId: number
	}
}

class AuthService {
	#BASE_URL: string = "auth/";

	getAuth = async<T>() => await instance.get<T>(`${this.#BASE_URL}me`)

	login = async({email, password, rememberMe, captcha = true}: ILogin) => await instance.post<ILoginResponse>(`${this.#BASE_URL}login`, {
		email,
		password,
		rememberMe,
		captcha
	})

	logout = async() => await instance.delete(`${this.#BASE_URL}login`)
}

export default new AuthService()