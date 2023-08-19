import styles from './UserMessage.module.css';
type AudioMessageProps = {
	audio: string;
};
const AudioMessage = ({ audio }: AudioMessageProps) => {
	return (
		<div>
			<audio controls className={styles.audioContainer}>
				<source src={audio} type="audio/mpeg" />
			</audio>
		</div>
	);
};
export default AudioMessage;
