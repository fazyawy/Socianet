import { instance } from "./api";

import { IResponse } from "./types/services.type";

class FollowService {
	#BASE_URL: string = "follow/";

	getIsFollow = (userId: number) => {
			return async() => await instance.get<boolean>(`${this.#BASE_URL}${userId}`)
		}

	follow = async(userId: number) => await instance.post<IResponse>(`${this.#BASE_URL}${userId}`)

	unfollow = async(userId: number) => await instance.delete<IResponse>(`${this.#BASE_URL}${userId}`)
}

export default new FollowService()