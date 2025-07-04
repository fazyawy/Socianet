import { ChangeAvatar } from "@/components/common/ChangeAvatar/ChangeAvatar";
import styles from "./ProfileLayout.module.scss"

import { ReactElement } from "react";

export const ProfileLayout = ({ children, src }: { children: ReactElement, src?: string }) => {

	return (
		<section className={styles.profile}>
			<h1>Update your profile</h1>

			<div className={styles.profile_change_container}>

				{children}

				<ChangeAvatar src={src} className={styles.change_avatar} />
			</div>

		</section>
	)
};