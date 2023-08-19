import Image from 'next/image';
import send from '../../../../public/images/send.svg';
import styles from './ExpandableChatInputs.module.css';
import {
	Dispatch,
	KeyboardEventHandler,
	SetStateAction,
	useState,
} from 'react';
import Message from '../../../../types/message.type';
import User from '../../../../types/user.type';

type TextFieldProps = {
	setAllMessages: Dispatch<SetStateAction<Message[]>>;
	selectedUser: User;
};
const TextField = ({ setAllMessages, selectedUser }: TextFieldProps) => {
	const [value, setValue] = useState<string>('');

	const onSend = () => {
		const newMessage = {
			id: Math.random(),
			message: {
				text: value,
			},
			userId: selectedUser.id,
		};
		setAllMessages(prevMessages => [...prevMessages, newMessage]);
		setValue('');
	};
	const handleKeyDown: KeyboardEventHandler<HTMLTextAreaElement> = e => {
		if (e.key === 'Enter') {
			onSend();
		}
	};
	return (
		<div className={styles.textFieldContainer}>
			<textarea
				className={styles.textInput}
				spellCheck={true}
				role="text-box"
				rows={2}
				value={value}
				dir="auto"
				onChange={e => setValue(e.target.value)}
				onKeyDown={handleKeyDown}
			/>
			<button className={styles.sendBtn} onClick={onSend}>
				<Image src={send} alt="send" />
			</button>
		</div>
	);
};
export default TextField;
