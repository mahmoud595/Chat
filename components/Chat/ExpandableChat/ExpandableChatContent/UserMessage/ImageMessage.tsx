import Image from 'next/image';
import styles from './UserMessage.module.css';
type ImageMessageProps = {
	image: string;
};
const ImageMessage = ({ image }: ImageMessageProps) => {
	return (
		<Image
			src={image}
			alt="image"
			width={150}
			height={200}
			className={styles.imageMsg}
		/>
	);
};
export default ImageMessage;
