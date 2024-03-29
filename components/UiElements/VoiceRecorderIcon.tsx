type VoiceRecorderIconProps = {
	color: string;
};
const VoiceRecorderIcon = ({ color }: VoiceRecorderIconProps) => {
	return (
		<svg
			fill={color}
			version="1.1"
			id="Capa_1"
			xmlns="http://www.w3.org/2000/svg"
			width="24px"
			height="24px"
			viewBox="0 0 47.964 47.965"
		>
			<g>
				<g>
					<path
						d="M23.982,35.268c5.531,0,10.033-4.635,10.033-10.332V10.333C34.015,4.635,29.513,0,23.982,0
			c-5.532,0-10.032,4.635-10.032,10.333v14.604C13.951,30.633,18.451,35.268,23.982,35.268z M29.22,24.938
			c0,2.974-2.35,5.395-5.238,5.395s-5.238-2.42-5.238-5.395V10.333c0-2.974,2.35-5.395,5.238-5.395s5.238,2.42,5.238,5.395V24.938z"
					/>
					<path
						d="M40.125,29.994c0-1.361-1.222-2.469-2.72-2.469c-1.5,0-2.721,1.107-2.721,2.469c0,4.042-3.621,7.329-8.074,7.329h-5.257
			c-4.453,0-8.074-3.287-8.074-7.329c0-1.361-1.221-2.469-2.721-2.469c-1.499,0-2.719,1.107-2.719,2.469
			c0,6.736,6.014,12.221,13.424,12.266v0.766h-5.944c-1.499,0-2.72,1.107-2.72,2.47s1.221,2.47,2.72,2.47h17.325
			c1.5,0,2.721-1.107,2.721-2.47s-1.221-2.47-2.721-2.47h-5.942V42.26C34.111,42.215,40.125,36.73,40.125,29.994z"
					/>
				</g>
			</g>
		</svg>
	);
};
export default VoiceRecorderIcon;
