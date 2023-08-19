import Image from 'next/image';
import Message from '../../../../../types/message.type';
import User from '../../../../../types/user.type';
import AudioMessage from './AudioMessage';
import ImageMessage from './ImageMessage';
import TextMessage from './TextMessage';
import styles from './UserMessage.module.css';
import users from '../../../../../utils/users';
import { useMemo } from 'react';
type UserMessageProps = {
	message: Message;
	selectedUser: User;
};

const UserMessage = ({ message, selectedUser }: UserMessageProps) => {
	const messageOwner = useMemo(
		() => users.find(user => user.id == message.userId),
		[message.userId]
	);
	const messageType = message.message;
	const isSelectedUser = selectedUser.id == messageOwner.id;
	return (
		<div
			className={`${styles.message} ${
				isSelectedUser ? styles.selectedUserMessage : {}
			}`}
		>
			<div className={styles.avatarContainer}>
				<Image
					src={messageOwner.avatar}
					fill={true}
					alt={messageOwner.name}
					className={styles.avatar}
				/>
			</div>
			<div
				className={` ${
					isSelectedUser
						? styles.selectedUserMessageContainer
						: styles.messageContainer
				}`}
			>
				{messageType.audio && <AudioMessage audio={messageType.audio} />}
				{messageType.image && <ImageMessage image={messageType.image} />}
				{messageType.text && (
					<TextMessage
						text={messageType.text}
						isSelectedUser={isSelectedUser}
					/>
				)}
			</div>
		</div>
	);
};
export default UserMessage;
