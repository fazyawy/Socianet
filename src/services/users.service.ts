import { instance } from "./api";
import followService from "./follow.service";

class UsersService {
	getUsers = <T>(maxShowedUsers: number,
		currentPage: number,
		isFriends: boolean) => {
			return async() => await instance.get<T>(`users?count=${maxShowedUsers}
				&page=${currentPage}
				${isFriends ? "&friend=true" : ""}`)
		}

	follow = (userId: number) => {
		console.warn("change to new service")
		return followService.follow(userId)
	}

	unfollow = (userId: number) => {
		console.warn("change to new service")
		return followService.unfollow(userId)
	}
}

export default new UsersService()