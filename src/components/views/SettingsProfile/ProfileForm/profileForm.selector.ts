import { useShallow } from "zustand/shallow";

import { IProfile } from '@/shared/types/profile.type';
import { IMyProfileStore } from '@/store/types/myProfile.types';

type profileFormSelectorReturnType = [IProfile, string | null]

export const getProfileFormSelector = () => useShallow((state: IMyProfileStore): profileFormSelectorReturnType => [state.myProfile, state.status])