import styles from "./Users.module.scss"

import { useUsers } from "./useUsers";

import { More } from "./More/More";
import { User } from "./User/User";

import { Preloader } from "@/components/UI/Preloader/Preloader";

export const Users = () => {
	const { isFriendsPage, usersData, isPending, pageCount } = useUsers();

	return (
		<main className={styles.users}>
			<h1>{isFriendsPage ? "Friends" : "Users"}</h1>

			{isPending ? <Preloader />
				: !!usersData ? (
					<>
						<div className={styles.user_container}>

							{usersData?.items.map((el) => <User key={el.id} {...el} />)}

						</div>

						{usersData.totalCount !== 0 && <More pageCount={pageCount} totalCount={usersData.totalCount || 6} />}
					</>
				) : "error"}

		</main>
	)
};

