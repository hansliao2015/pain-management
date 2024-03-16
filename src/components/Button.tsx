interface IButtonProps {
	onClick: () => void;
	label: string;
}

export default function Button({ onClick, label }: IButtonProps) {
	return (
		<button onClick={onClick}>{label}</button>
	);
}