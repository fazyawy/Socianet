import { FollowBtn } from "@/components/common/FollowBtn/FollowBtn";
import styles from "./Info.module.scss"
import { IInfo } from "./Info.type";

import { Avatar } from "@/components/UI/Avatar/Avatar";


export const Info = ({name, src, id}: IInfo) => {

	return (
		<article className={styles.info}>

				<Avatar
				src={src}
				type={"large"}/>

				<div className={styles.name_status}>
					<h1>{name}</h1>
					<h3>working</h3>
				</div>

				<div className={styles.description}>
					<h4>Description</h4>
					<span>{`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae dolor laborum sapiente deleniti autem optio ab. Dolor, omnis eum. Accusamus voluptates saepe quis asperiores commodi perspiciatis aperiam veniam distinctio natus?
					Saepe ullam minima, assumenda quibusdam quam excepturi similique. Sapiente sed tempora laborum dignissimos fugit, blanditiis ullam quasi, adipisci sunt qui incidunt quaerat vero aperiam! Labore velit excepturi vero sint provident.`.slice(0, 250)} <a href="">...more</a></span>
				</div>

				{id !== 2 &&<FollowBtn isFollowed={false} userId={id}/>}

			</article>
	)
};

