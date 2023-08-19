import Image from 'next/image';
import imageUpload from '../../../../public/images/imageUpload.svg';
import styles from './ExpandableChatInputs.module.css';
import { ChangeEventHandler, Dispatch, SetStateAction, useState } from 'react';
import Message from '../../../../types/message.type';
import User from '../../../../types/user.type';

type ImageUploaderProps = {
	setAllMessages: Dispatch<SetStateAction<Message[]>>;
	selectedUser: User;
};
const ImageUploader = ({
	setAllMessages,
	selectedUser,
}: ImageUploaderProps) => {
	const onImageChange: ChangeEventHandler<HTMLInputElement> = event => {
		if (event.target.files && event.target.files[0]) {
			let img = event.target.files[0];
			if (!img.name.match(/\.(jpg|jpeg|png|gif|PNG)$/)) {
				return;
			}
			const url = URL.createObjectURL(img);
			const newMessage = {
				id: Math.random(),
				message: {
					image: url,
				},
				userId: selectedUser.id,
			};
			setAllMessages(prevMessages => [...prevMessages, newMessage]);
		}
	};
	return (
		<div className={styles.imageUploader}>
			<label htmlFor="file-input">
				<Image
					src={imageUpload}
					alt="upload-image"
					className={styles.imagIcon}
				/>
			</label>

			<input
				id="file-input"
				type="file"
				name="myImage"
				onChange={onImageChange}
				className={styles.uploadInput}
			/>
		</div>
	);
};
export default ImageUploader;
