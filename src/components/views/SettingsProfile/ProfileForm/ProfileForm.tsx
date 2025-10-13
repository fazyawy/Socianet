import styles from "./ProfileForm.module.scss"

import { useProfileForm } from "./useProfileForm";

import { FormInput } from "@/components/common/FormInput/FormInput";

import { requiredValidator } from "@/shared/validators/required.validator";
import { maxLengthValidator } from "@/shared/validators/maxLength.validator";

export const ProfileForm = () => {

	const { register, onSubmit, errors, myProfile, status } = useProfileForm();

	return (
		<form action="" onSubmit={onSubmit} className={styles.profile_form}>

			<FormInput
				inputData={{
					label: "Change nickname:",
					title: "Set new nickname",
					placeholder: myProfile.fullName
				}}

				className={styles.form_input}
				errors={errors.fullName}
				register={register("fullName", { ...requiredValidator })} />

			<FormInput
				inputData={{
					label: "Change status:",
					title: "Set new status",
					placeholder: status
				}}
				className={styles.form_input}
				errors={errors.status}
				register={register("status", { ...maxLengthValidator(300) })} />

			<FormInput
				inputData={{
					type: "textarea",
					placeholder: myProfile.aboutMe || "",
					label: "Change about me:",
					title: "Set new about me"
				}}
				className={styles.form_input}
				errors={errors.aboutMe}
				register={register("aboutMe", { ...requiredValidator })} />

			<button type="submit" className={styles.button}>Save changes</button>

		</form>
	)
};

