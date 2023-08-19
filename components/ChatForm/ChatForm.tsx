import { ChangeEventHandler, MouseEventHandler, useState } from 'react';
import { SketchPicker } from 'react-color';
import styles from './ChatForm.module.css';
import users from '../../utils/users';
import { useChatContext } from '../../context/chatContext';
type Props = {};
const ChatForm = (props: Props) => {
	const [openSketch, setOpenSketch] = useState(false);
	const { chatData, updateChat } = useChatContext();
	const [formData, setFormData] = useState(chatData);

	const { r, g, b, a } = formData.color;

	const submitHandler: MouseEventHandler<HTMLFormElement> = e => {
		e.preventDefault();
		updateChat(formData);
	};
	const clickHandler = () => {
		setOpenSketch(!openSketch);
	};
	const changeHandler: ChangeEventHandler<
		HTMLInputElement & HTMLSelectElement
	> = e => {
		const { name } = e.target;
		let value = e.target.value;
		if (name === 'image') {
			if (e.target.files && e.target.files[0]) {
				let img = e.target.files[0];
				if (!img.name.match(/\.(jpg|jpeg|png|gif|PNG)$/)) {
					return;
				}
				value = URL.createObjectURL(img);
			}
		}

		setFormData({ ...formData, [name]: value });
	};
	return (
		<div className={styles.formContainer}>
			<h1 className={styles.title}>Customize Your Chat</h1>
			<form className={styles.form} onSubmit={submitHandler}>
				<div className={styles.formItem}>
					<label htmlFor="title">Chat Title</label>
					<input name="title" type="text" onChange={changeHandler} />
				</div>
				<div className={styles.formItem}>
					<label htmlFor="image">Chat Image</label>
					<input name="image" type="file" onChange={changeHandler} />
				</div>
				<div className={styles.formItem}>
					<label htmlFor="color">Chat Theme</label>
					<input type="button" onClick={clickHandler} value="Choose Color" />
					{openSketch && (
						<div className={styles.sketch}>
							<SketchPicker
								onChange={color => {
									setFormData({ ...formData, color: color.rgb });
								}}
								color={formData.color}
							/>
						</div>
					)}
					<p>
						rgba({r},{g},{b},{a})
					</p>
				</div>

				<div className={styles.formItem}>
					<label htmlFor="selectedUser">Chat Personal User</label>
					<select name="user" id="user" onChange={changeHandler}>
						{users.map(user => (
							<option key={user.id} value={user.id}>
								{user.name}
							</option>
						))}
					</select>
				</div>
				<button type="submit" className={styles.submitBtn}>
					Submit
				</button>
			</form>
		</div>
	);
};
export default ChatForm;
