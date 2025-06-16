import styles from "./Users.module.scss"

import { useUsers } from "./useUsers";

import { More } from "./More/More";
import { User } from "./User/User";

export const Users = () => {
	const { isFriendsPage, data, isLoading, upMaxShowedUsers, maxShowedUsers, pageCount } = useUsers();

	return (
		<main className={styles.users}>
			<h1>{isFriendsPage ? "Friends" : "Users"}</h1>

			{isLoading ? "Loading..."
				: !!data ? (
					<>
						<div className={styles.grid}>

							{data?.items.map((el) => <User key={el.id} {...el} />)
							}

						</div>

						{maxShowedUsers <= data?.totalCount && <More upMaxShowedUsers={upMaxShowedUsers} pageCount={pageCount} />}
					</>
				) : "error"}

		</main>
	)
};

