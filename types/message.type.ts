type Message = {
	id: number | string;
	userId: number;
	message: MessageType;
};
export type MessageType = {
	text?: string;
	audio?: string;
	image?: string;
};
export default Message;
