import { instance } from "./api";

class UsersService {
	getUsers = <T>(maxShowedUsers: number,
		currentPage: number,
		isFriends: boolean,
		searchValue?: string) => {
			return async() => await instance.get<T>(`users?count=${maxShowedUsers}
				&page=${currentPage}
				${isFriends ? "&friend=true" : ""}
				&term=${searchValue ?? ""}`)
		}
}

export default new UsersService()