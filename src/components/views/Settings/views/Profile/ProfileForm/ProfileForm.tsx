import styles from "./ProfileForm.module.scss"

import { FormInput } from "@/components/common/FormInput/FormInput";
import { useProfileForm } from "./useProfileForm";
import { requiredValidator } from "@/shared/validators/required.validator";
import { maxLengthValidator } from "@/shared/validators/maxLength.validator";

export const ProfileForm = ({ isSettings = true }: { isSettings?: boolean }) => {

	const { register, onSubmit, errors, myProfile, src } = useProfileForm();

	return (
		<form action="" onSubmit={onSubmit} className={styles.profile_form}>

			{isSettings &&
				<FormInput
					className={styles.form_input}
					errors={errors.fullName}
					placeholder={myProfile.fullName}
					label={"Change nickname:"}
					title={"Set new nickname"}
					register={register("fullName", { ...requiredValidator })} />}

			<FormInput
				title={"Set new status"}
				className={styles.form_input}
				errors={errors.status}
				label={isSettings ? "Change status:" : undefined}
				register={register("status", { ...maxLengthValidator(300) })} />

			{isSettings &&
				<FormInput
					type={"textarea"}
					className={styles.form_input}
					errors={errors.aboutMe}
					placeholder={myProfile.aboutMe || ""}
					label={"Change about me:"}
					title={"Set new about me"}
					register={register("aboutMe", { ...requiredValidator })} />}

			<button type="submit">Save changes</button>

		</form>
	)
};

