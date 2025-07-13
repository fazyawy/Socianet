import { ChangeAvatar } from "@/components/common/ChangeAvatar/ChangeAvatar";
import styles from "./ProfileLayout.module.scss"

import { ReactElement } from "react";

export const ProfileLayout = ({ children }: { children: ReactElement }) => {

	return (
		<section className={styles.profile}>
			<h1>Update your profile</h1>

			<div className={styles.profile_change_container}>

				{children}

				<ChangeAvatar className={styles.change_avatar} />
			</div>

		</section>
	)
};