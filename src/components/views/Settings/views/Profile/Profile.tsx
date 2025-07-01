import styles from "./Profile.module.scss"

import { useProfile } from "./useProfile";
import { FormInput } from "@/components/common/FormInput/FormInput";
import { requiredValidator } from "@/shared/validators/required.validator";

export const Profile = () => {

	const { register, onSubmit, errors } = useProfile();

	return (
		<div className={styles.profile}>
			<h1>Update your profile</h1>

			<form action="" onSubmit={onSubmit} className={styles.profile_form}>

				<FormInput
					errors={errors.fullName}
					label={"Change nickname:"}
					title={"Change nickname"}
					register={register("fullName", { ...requiredValidator })} />
				<FormInput
					errors={errors.aboutMe}
					placeholder="information about me"
					label={"Change about me:"}
					title={"Change about me"}
					register={register("aboutMe", { ...requiredValidator })} />

				<button type="submit">Save changes</button>

			</form>

		</div>
	)
};

