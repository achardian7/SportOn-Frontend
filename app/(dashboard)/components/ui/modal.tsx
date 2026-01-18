import { FiX } from "react-icons/fi";

interface IModalProps {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, title, children }: IModalProps) => {
	if (!isOpen) return null;

	return (
		<div className="fixed z-50 inset-0 flex items-center justify-center p-4">
			<div
				className="absolute bg-black/50 backdrop-blur-sm transition-opacity w-full h-full"
				onClick={onClose}
			></div>
			<div className="relative bg-white rounded-xl max-w-2xl w-full shadow-xl">
				<div className="flex justify-between items-center p-7 border-b border-gray-200">
					<h3 className="font-semibold text-2xl">{title}</h3>
					<button
						onClick={onClose}
						className="p-4 hover:bg-gray-100 rounded-full cursor-pointer"
					>
						<FiX size={24} />
					</button>
				</div>

				<div className="p-7">{children}</div>
			</div>
		</div>
	);
};

export default Modal;
