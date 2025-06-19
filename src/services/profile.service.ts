import { instance } from "./api";

import { IProfile } from "@/shared/types/profile.type";

class ProfileService {
	getProfile = (userId: number) => async () => await instance.get<IProfile>(`profile/${userId}`)
}

export default new ProfileService()