import { instance } from "./api";

import { IResponse } from "./types/services.type";

class FollowService {
	getIsFollow = <T>(userId: number) => {
			return async() => await instance.get<T>(`follow/${userId}`)
		}

	follow = async(userId: number) => await instance.post<IResponse>(`follow/${userId}`)

	unfollow = async(userId: number) => await instance.delete<IResponse>(`follow/${userId}`)
}

export default new FollowService()