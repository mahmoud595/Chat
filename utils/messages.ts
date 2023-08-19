import Message from '../types/message.type';

const messages: Message[] = [
	{
		id: 1,
		message: {
			text: 'Hi , Ahmed',
		},
		userId: 1,
	},
	{
		id: 2,
		message: {
			audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
		},
		userId: 2,
	},
	{
		id: 3,
		message: {
			image:
				'https://images.contentstack.io/v3/assets/bltacc1a01c4d280f24/blt14b490b724215e87/61c01d0d9d4a976169b7059a/hello-4439419.jpg?auto=webp&format=pjpg&quality=80&width=900&height=500&fit=crop',
		},
		userId: 1,
	},
	{
		id: 4,
		message: {
			text: 'Welcome , Mahmoud',
		},
		userId: 2,
	},
	{
		id: 5,
		message: {
			text: 'How are you today?',
		},
		userId: 2,
	},
];

export default messages;
