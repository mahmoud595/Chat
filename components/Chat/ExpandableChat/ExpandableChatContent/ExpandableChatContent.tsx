/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useRef, useState } from 'react';
import styles from './ExpandableChatContent.module.css';
import messages from '../../../../utils/messages';
import UserMessage from './UserMessage/UserMessage';
import User from '../../../../types/user.type';
import Message from '../../../../types/message.type';

type ExpandableChatContentProps = {
	selectedUser: User;
	allMessages: Message[];
};
const ExpandableChatContent = ({
	selectedUser,
	allMessages,
}: ExpandableChatContentProps) => {
	const messagesEndRef = useRef(null);
	const scrollToBottom = useCallback(() => {
		messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
	}, [allMessages.length]);
	useEffect(() => {
		scrollToBottom();
	}, [scrollToBottom]);
	return (
		<div className={styles.content}>
			{allMessages.map(message => (
				<UserMessage
					key={message.id}
					message={message}
					selectedUser={selectedUser}
				/>
			))}
			<div ref={messagesEndRef} />
		</div>
	);
};
export default ExpandableChatContent;
