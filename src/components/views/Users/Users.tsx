import styles from "./Users.module.scss"

import { useUsers } from "./useUsers";

import { More } from "./More/More";
import { User } from "./User/User";

import { Preloader } from "@/components/UI/Preloader/Preloader";
import { Search } from "./Search/Search";

export const Users = () => {
	const { isFriendsPage, usersData, isPending, pageCount, haveAside, search } = useUsers();

	return (
		<main className={styles.users} data-testid="main">
			<Search isFriendsPage={isFriendsPage} {...search}/>

			{isPending ? <Preloader />
				: !!usersData ? (
					<>
						<div className={`${styles.user_container} ${haveAside ? "" : styles.not_aside}`}>

							{usersData?.items.map((el) => <User key={el.id} {...el} />)}

						</div>

						{usersData.totalCount !== 0 && <More pageCount={pageCount} totalCount={usersData.totalCount || 6} />}
					</>
				) : "error"}

		</main>
	)
};

