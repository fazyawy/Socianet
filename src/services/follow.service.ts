import { IResponse } from "@/shared/types/response.type";
import { instance } from "./api";

class FollowService {
	getIsFollow = <T>(userId: number) => {
			return async() => await instance.get<T>(`follow/${userId}`)
		}

	follow = async(userId: number) => await instance.post<IResponse>(`follow/${userId}`)

	unfollow = async(userId: number) => await instance.delete<IResponse>(`follow/${userId}`)
}

export default new FollowService()