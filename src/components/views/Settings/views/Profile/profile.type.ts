import { IProfile } from "@/shared/types/profile.type";

export type IProfileForm = Omit<IProfile, "photos">;