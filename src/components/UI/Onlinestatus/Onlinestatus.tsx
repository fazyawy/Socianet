import styles from "./Onlinestatus.module.scss"

export const Onlinestatus = ({className}: {className?: string}) => {
	return (
		<span className={`${styles.online_status} ${className}`}></span>
	)
};

