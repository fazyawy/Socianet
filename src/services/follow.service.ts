import { instance } from "./api";

import { IResponse } from "./types/services.type";

class FollowService {
	getIsFollow = (userId: number) => {
			return async() => await instance.get<boolean>(`follow/${userId}`)
		}

	follow = async(userId: number) => await instance.post<IResponse>(`follow/${userId}`)

	unfollow = async(userId: number) => await instance.delete<IResponse>(`follow/${userId}`)
}

export default new FollowService()