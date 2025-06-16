import { IResponse } from "@/shared/types/response.type";
import { instance } from "./api";

class UsersService {
	getUsers = <T>(maxShowedUsers: number,
		currentPage: number,
		isFriends: boolean) => {
			return async() => await instance.get<T>(`users?count=${maxShowedUsers}
				&page=${currentPage}
				${isFriends ? "&friend=true" : ""}`)
		}

	follow = async(userId: number) => await instance.post<IResponse>(`follow/${userId}`)

	unfollow = async(userId: number) => await instance.delete<IResponse>(`follow/${userId}`)
}

export default new UsersService()