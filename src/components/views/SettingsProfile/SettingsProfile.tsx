import styles from "./SettingsProfile.module.scss"

import { ChangeAvatar } from "@/components/common/ChangeAvatar/ChangeAvatar";
import { ProfileForm } from "./ProfileForm/ProfileForm";

export const SettingsProfile = () => {

	return (
		<main className={styles.profile} data-testid="main">
			<h1>Update your profile</h1>

			<div className={styles.profile_change_container}>

				<ProfileForm />

				<ChangeAvatar className={styles.change_avatar} />
			</div>

		</main>
	)
};



