import styles from "./Onlinestatus.module.scss"

export const Onlinestatus = ({className}: {className?: string}) => {
	return (
		<span data-testid="online status" className={`${styles.online_status} ${className}`}></span>
	)
};

