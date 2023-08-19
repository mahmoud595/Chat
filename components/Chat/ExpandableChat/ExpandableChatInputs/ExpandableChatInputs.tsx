import { Dispatch, SetStateAction } from 'react';
import Message from '../../../../types/message.type';
import styles from './ExpandableChatInputs.module.css';
import ImageUploader from './ImageUploader';
import TextField from './TextField';
import VoiceRecorder from './VoiceRecorder';
import User from '../../../../types/user.type';

type ExpandableChatInputsProps = {
	setAllMessages: Dispatch<SetStateAction<Message[]>>;
	selectedUser: User;
};
const ExpandableChatInputs = ({
	setAllMessages,
	selectedUser,
}: ExpandableChatInputsProps) => {
	return (
		<div className={styles.inputsContainer}>
			<ImageUploader
				setAllMessages={setAllMessages}
				selectedUser={selectedUser}
			/>
			<VoiceRecorder
				setAllMessages={setAllMessages}
				selectedUser={selectedUser}
			/>
			<TextField setAllMessages={setAllMessages} selectedUser={selectedUser} />
		</div>
	);
};
export default ExpandableChatInputs;
