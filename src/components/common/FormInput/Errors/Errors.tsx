import styles from "./Errors.module.scss"

export const Errors = ({message}: {message?: string}) => {
	return (
		<span className={styles.error} data-testid={"errors"}>
			{message}
		</span>
	)
};

