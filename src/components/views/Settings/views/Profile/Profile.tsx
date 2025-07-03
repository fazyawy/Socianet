import { ChangeAvatar } from "@/components/common/ChangeAvatar/ChangeAvatar";
import styles from "./Profile.module.scss"

import { useProfile } from "./useProfile";
import { FormInput } from "@/components/common/FormInput/FormInput";
import { requiredValidator } from "@/shared/validators/required.validator";
import { maxLengthValidator } from "@/shared/validators/maxLength.validator";

export const Profile = () => {

	const { register, onSubmit, errors, myProfile, src } = useProfile();

	return (
		<section className={styles.profile}>
			<h1>Update your profile</h1>

			<div className={styles.profile_change_container}>
				<form action="" onSubmit={onSubmit} className={styles.profile_form}>

					<FormInput
						className={styles.form_input}
						errors={errors.fullName}
						placeholder={myProfile.fullName}
						label={"Change nickname:"}
						title={"Set new nickname"}
						register={register("fullName", { ...requiredValidator })} />
					<FormInput
						className={styles.form_input}
						errors={errors.status}
						placeholder={"status"}
						label={"Change staus:"}
						title={"Set new staus"}
						register={register("status", { ...maxLengthValidator(300) })} />
					<FormInput
						type={"textarea"}
						className={styles.form_input}
						errors={errors.aboutMe}
						placeholder={myProfile.aboutMe || ""}
						label={"Change about me:"}
						title={"Set new about me"}
						register={register("aboutMe", { ...requiredValidator })} />

					<button type="submit">Save changes</button>

				</form>

				<ChangeAvatar src={src} className={styles.change_avatar} />
			</div>

		</section>
	)
};

