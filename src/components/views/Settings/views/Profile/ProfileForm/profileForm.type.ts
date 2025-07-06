import { IProfile } from "@/shared/types/profile.type";

export interface IProfileForm extends Omit<IProfile, "photos"> {
	status: string
};