import { ProfileLayout } from "./ProfileLayout/ProfileLayout";
import { ProfileForm } from "./ProfileForm/ProfileForm";

export const Profile = ({ isSettings = true }: { isSettings?: boolean }) => {
	console.log(isSettings)
	if (isSettings == false) return <ProfileForm isSettings={isSettings} />

	return (
		<ProfileLayout>
			<ProfileForm />
		</ProfileLayout>
	)
};



