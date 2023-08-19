import { FC, useState } from 'react';
import ChatBubble from './ChatBubble/ChatBubble';
import ExpandableChat from './ExpandableChat/ExpandableChat';
import users from '../../utils/users';
import Message from '../../types/message.type';
import messages from '../../utils/messages';
import { useChatContext } from '../../context/chatContext';

const Chat: FC = () => {
	const [collapsed, setCollapsed] = useState<boolean>(true);

	const [allMessages, setAllMessages] = useState<Message[]>(messages);
	const { chatData } = useChatContext();
	const { user } = chatData;
	const selectedUser = users.find(singleUser => singleUser.id == user);
	return (
		<>
			{collapsed ? (
				<ChatBubble collapsed={collapsed} setCollapsed={setCollapsed} />
			) : (
				<ExpandableChat
					collapsed={collapsed}
					setCollapsed={setCollapsed}
					selectedUser={selectedUser}
					allMessages={allMessages}
					setAllMessages={setAllMessages}
				/>
			)}
		</>
	);
};
export default Chat;
