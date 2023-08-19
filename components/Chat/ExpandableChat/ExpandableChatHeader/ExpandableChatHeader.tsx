import Image from 'next/image';
import styles from './ExpandableChatHeader.module.css';
import ChatProps from '../../../../types/chat.type';
import { useChatContext } from '../../../../context/chatContext';

const ExpandableChatHeader = ({ setCollapsed }: ChatProps) => {
	const { chatData } = useChatContext();
	const { image, title } = chatData;
	return (
		<div className={styles.chatHeader} onClick={() => setCollapsed(true)}>
			<div className={styles.chatHeaderContent}>
				<div className={styles.chatbubbleImage}>
					<Image src={image} alt="avatar" width={30} height={25} />
				</div>
				<p className={styles.chatTitle}>{title}</p>
			</div>
		</div>
	);
};
export default ExpandableChatHeader;
