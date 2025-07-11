import { instance } from "./api";

class UsersService {
	getUsers = <T>(maxShowedUsers: number,
		currentPage: number,
		isFriends: boolean) => {
			return async() => await instance.get<T>(`users?count=${maxShowedUsers}
				&page=${currentPage}
				${isFriends ? "&friend=true" : ""}`)
		}
}

export default new UsersService()