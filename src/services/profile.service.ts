import { instance } from "./api";

import { IProfile } from "@/shared/types/profile.type";
import { IResponse } from "./types/services.type";

class ProfileService {
	#BASE_URL: string = "profile/";

	getProfile = (userId: number) => async () => await instance.get<IProfile>(`${this.#BASE_URL}${userId}`);

	setProfilePhoto = async(image: File) => await instance.postForm<IResponse>(`${this.#BASE_URL}photo`, {
		image
	});

	setProfileStatus = async(status: string) => await instance.put<IResponse>(`${this.#BASE_URL}status`, {
		status
	})

	getStatus = (userId: number) => async () => await instance.get<string>(`${this.#BASE_URL}status/${userId}`);
}

export default new ProfileService()