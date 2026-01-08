interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	className?: string;
	variant?: "primary" | "dark" | "ghost";
	size?: "small" | "normal";
}

const Button = ({
	children,
	className,
	variant = "primary",
	size = "normal",
	...props
}: IButtonProps) => {
	const baseStyles =
		"inline-flex gap-2 duration-300 justify-center items-center cursor-pointer hover:scale-105";

	const variants = {
		dark: "bg-dark text-white hover:bg-dark/85",
		ghost: "bg-transparent text-dark hover:bg-gray-100",
		primary: "bg-primary text-white hover:bg-primary/85",
	};

	const sizes = {
		normal: "py-4 px-9",
		small: "py-[10px] px7",
	};

	return (
		<button
			className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;
