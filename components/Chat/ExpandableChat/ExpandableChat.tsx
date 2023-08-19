import { Dispatch, SetStateAction, useState } from 'react';
import ChatProps from '../../../types/chat.type';
import User from '../../../types/user.type';
import styles from './ExpandableChat.module.css';
import ExpandableChatContent from './ExpandableChatContent/ExpandableChatContent';
import ExpandableChatHeader from './ExpandableChatHeader/ExpandableChatHeader';
import ExpandableChatInputs from './ExpandableChatInputs/ExpandableChatInputs';
import Message from '../../../types/message.type';
import { useChatContext } from '../../../context/chatContext';

type ExpandableChatProps = ChatProps & {
	selectedUser: User;
	allMessages: Message[];
	setAllMessages: Dispatch<SetStateAction<Message[]>>;
};
const ExpandableChat = ({
	collapsed,
	setCollapsed,
	selectedUser,
	allMessages,
	setAllMessages,
}: ExpandableChatProps) => {
	const { chatData } = useChatContext();
	const {
		color: { r, g, b, a },
	} = chatData;
	const backgroundColor = `${r}, ${g}, ${b}, ${a}`;
	return (
		<div
			className={styles.chatContainer}
			style={{ background: `rgba(${backgroundColor})` }}
		>
			<ExpandableChatHeader setCollapsed={setCollapsed} />
			<ExpandableChatContent
				selectedUser={selectedUser}
				allMessages={allMessages}
			/>
			<ExpandableChatInputs
				setAllMessages={setAllMessages}
				selectedUser={selectedUser}
			/>
		</div>
	);
};
export default ExpandableChat;
