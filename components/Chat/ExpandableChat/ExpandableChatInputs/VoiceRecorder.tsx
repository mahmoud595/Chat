import Image from 'next/image';
import styles from './ExpandableChatInputs.module.css';
import { Dispatch, SetStateAction, useRef, useState } from 'react';
import VoiceRecorderIcon from '../../../UiElements/VoiceRecorderIcon';
import Message from '../../../../types/message.type';
import User from '../../../../types/user.type';
type VoiceRecorderProps = {
	setAllMessages: Dispatch<SetStateAction<Message[]>>;
	selectedUser: User;
};
const VoiceRecorder = ({
	selectedUser,
	setAllMessages,
}: VoiceRecorderProps) => {
	const [recording, setRecording] = useState(false);
	const mediaRecorderRef = useRef<MediaRecorder | null>(null);
	const chunksRef = useRef<Blob[]>([]);

	const handleStartRecording = () => {
		navigator.mediaDevices
			.getUserMedia({ audio: true })
			.then(stream => {
				const mediaRecorder = new MediaRecorder(stream);
				mediaRecorderRef.current = mediaRecorder;
				chunksRef.current = [];

				mediaRecorder.addEventListener('dataavailable', e => {
					chunksRef.current.push(e.data);
				});

				mediaRecorder.start();

				setRecording(true);
			})
			.catch(error => {
				alert('Error accessing microphone: ' + error);
			});
	};
	const handleStopRecording = () => {
		if (mediaRecorderRef.current) {
			mediaRecorderRef.current.stop();

			mediaRecorderRef.current.addEventListener('stop', () => {
				const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
				const url = URL.createObjectURL(blob);

				chunksRef.current = [];
				const newMessage = {
					id: Math.random(),
					userId: selectedUser.id,
					message: {
						audio: url,
					},
				};
				setAllMessages(prevMessages => [...prevMessages, newMessage]);
			});
		}

		setRecording(false);
	};
	console;
	return (
		<div
			className={styles.voiceRecorder}
			onClick={recording ? handleStopRecording : handleStartRecording}
		>
			<VoiceRecorderIcon color={recording ? 'red' : '#767677'} />
		</div>
	);
};
export default VoiceRecorder;
