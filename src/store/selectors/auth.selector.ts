import { IAuthStore } from "@/store/types/auth.types";

export const getIsAuthSelector = (state: IAuthStore) => state.isAuth