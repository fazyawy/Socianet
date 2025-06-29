import styles from "./Profile.module.scss"

import { useProfile } from "./useProfile";
import { FormInput } from "@/components/common/FormInput/FormInput";
import { requiredValidator } from "@/shared/validators/required.validator";

export const Profile = () => {

	const { myProfile, register, onSubmit } = useProfile();

	return (
		<div className={styles.profile}>
			<h1>Update your profile</h1>

			<form action="" onSubmit={onSubmit} className={styles.profile_form}>

				<FormInput label={myProfile.fullName} title={"nickname"} register={register("fullName", {...requiredValidator})}/>

				<button>Save changes</button>

			</form>

		</div>
	)
};

