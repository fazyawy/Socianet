import styles from "./ProfileForm.module.scss"

import { useProfileForm } from "./hooks/useProfileForm";

import { FormInput } from "@/components/common/FormInput/FormInput";

import { requiredValidator } from "@/shared/validators/required.validator";
import { maxLengthValidator } from "@/shared/validators/maxLength.validator";

export const ProfileForm = () => {

	const { register, onSubmit, errors, myProfile, status } = useProfileForm();

	return (
		<form action="" onSubmit={onSubmit} className={styles.profile_form}>

			<FormInput
				className={styles.form_input}
				errors={errors.fullName}
				placeholder={myProfile.fullName}
				label={"Change nickname:"}
				title={"Set new nickname"}
				register={register("fullName", { ...requiredValidator })} />

			<FormInput
				title={"Set new status"}
				className={styles.form_input}
				errors={errors.status}
				label={"Change status:"}
				placeholder={status}
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
	)
};

