import { useFollowMutation } from "./hooks/useFollowMutation";
import { useUnFollowMutation } from "./hooks/useUnFollowMutation";
import { useIsFollowQuery } from "./hooks/useIsFollowQuery";

export const useFollowBtn = (isFollowed: boolean | undefined, id: number) => {

	const haveIsFollowed = isFollowed !== undefined;

	const { data: isFollow, isPending: isFollowPending } = useIsFollowQuery(haveIsFollowed, id);

	const isFollowBtn = isFollow || isFollowed;

	const { mutate: followMutate, isPending: followIsPending } = useFollowMutation(haveIsFollowed, id);
	const { mutate: unFollowMutate, isPending: unFollowIsPending } = useUnFollowMutation(haveIsFollowed, id);

	return {
		mutate: isFollowBtn ? unFollowMutate : followMutate,
		isPending: followIsPending || unFollowIsPending || (!haveIsFollowed && isFollowPending),
		isFollowBtn
	}
};

