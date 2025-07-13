import styles from "./Typing.module.scss"

export const Typing = () => {
	return (
		<div className={styles.typing}>

			<div className={styles.dots}>
				<span></span>
				<span></span>
				<span></span>
			</div>

			<span>John is typing...</span>

		</div>
	)
};

