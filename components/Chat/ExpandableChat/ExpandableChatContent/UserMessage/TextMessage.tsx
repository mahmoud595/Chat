import { MessageType } from '../../../../../types/message.type';
import styles from './UserMessage.module.css';

type TextMessage = {
	text: string;
	isSelectedUser: boolean;
};
const TextMessage = ({ text, isSelectedUser }: TextMessage) => {
	return (
		<div
			className={`${styles.textContainer} ${
				isSelectedUser ? styles.selectedUserTextContainer : {}
			}`}
		>
			<p>{text}</p>
		</div>
	);
};
export default TextMessage;
