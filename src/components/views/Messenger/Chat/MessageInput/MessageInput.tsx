import styles from "./MessageInput.module.scss";
import { useInput } from "@/hooks/useInput";

import { FaMicrophone, FaPaperclip, FaPaperPlane } from "react-icons/fa";
import { InputContainer } from "./InputContainer/InputContainer";

export const MessageInput = () => {

	const { ...input } = useInput("");

	return (
		<div className={styles.input}>
			<button title="Attach file">
				<FaPaperclip />
			</button>

			<InputContainer {...input}/>

			{input.value === "" ?
				(<button title="Record voice message">
					<FaMicrophone />
				</button>) :
				(<button title="Send message">
					<FaPaperPlane />
				</button>)}

		</div>
	)
};

