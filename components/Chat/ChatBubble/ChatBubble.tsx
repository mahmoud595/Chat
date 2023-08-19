import Image from 'next/image';
import styles from './ChatBubble.module.css';
import ChatProps from '../../../types/chat.type';
import { useChatContext } from '../../../context/chatContext';

const ChatBubble = ({ setCollapsed }: ChatProps) => {
	const { chatData } = useChatContext();
	const { image } = chatData;
	const collapsingHandler = () => {
		setCollapsed(false);
	};

	return (
		<div className={styles.bubbleBtn} onClick={collapsingHandler}>
			<Image className={styles.bubble} src={image} alt="chat" fill={true} />
		</div>
	);
};
export default ChatBubble;
