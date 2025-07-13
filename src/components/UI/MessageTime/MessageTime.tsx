import styles from "./MessageTime.module.scss"

export const MessageTime = ({children}: {children: string}) => {
	return (
		<span className={styles.message_time}>{children}</span>
	)
};

