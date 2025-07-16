import styles from "./SubColor.module.scss"
import { useSubColor } from "./useSubColor";

export const SubColor = () => {

	const { value, onChange, onSaveClick, isChanged } = useSubColor();

	return (
		<section className={styles.sub}>
			<h2>Sub color</h2>
			<sub className={styles.description}>Choose the sub color of the interface for better using experience</sub>

			<div className={styles.color_picker}>
				<input type="color" name="" id="" onChange={onChange} value={value} />
				<span> </span>
			</div>

			{isChanged && <button className={styles.button} onClick={onSaveClick}>save</button>}
		</section>
	)
};

