import { instance } from "./api";

import { IProfile } from "@/shared/types/profile.type";
import { IResponse } from "./types/services.type";

class ProfileService {
	#BASE_URL: string = "profile/";

	getProfile = (userId: number) => async () => await instance.get<IProfile>(`${this.#BASE_URL}${userId}`);

	setProfile = async(profile: Omit<IProfile, "photos">) => await instance.put<IResponse>(`${this.#BASE_URL}`, profile )


	setProfilePhoto = async(image: File) => await instance.postForm<IResponse>(`${this.#BASE_URL}photo`, {
		image
	});


	getStatus = (userId: number) => async () => await instance.get<string>(`${this.#BASE_URL}status/${userId}`);

	setProfileStatus = async(status: string) => await instance.put<IResponse>(`${this.#BASE_URL}status`, {
		status
	})
}

export default new ProfileService()