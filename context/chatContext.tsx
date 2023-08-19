import {
	PropsWithChildren,
	createContext,
	useContext,
	useReducer,
	useState,
} from 'react';
import ChatDataType from '../types/chatData.type';
import users from '../utils/users';
type ChatContextType = {
	chatData: ChatDataType;
	updateChat: (chatData: ChatDataType) => void;
};
export const ChatContext = createContext<ChatContextType | null>(null);
export const initialChatData = {
	title: 'Chat',
	image: '/images/chat-bubble.png',
	user: users[0].id,
	color: {
		r: '36',
		g: '37',
		b: '38',
		a: '1',
	},
};
const ChatProvider: React.FC<PropsWithChildren> = ({ children }) => {
	const [chatData, setChatData] = useState<ChatDataType>(initialChatData);
	const updateChat = value => {
		setChatData({ ...chatData, ...value });
	};
	return (
		<ChatContext.Provider value={{ chatData, updateChat }}>
			{children}
		</ChatContext.Provider>
	);
};

export const useChatContext = () => {
	return useContext(ChatContext);
};

export default ChatProvider;
