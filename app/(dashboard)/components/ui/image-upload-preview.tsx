import Image from "next/image";
import { useRef } from "react";
import { FiUploadCloud } from "react-icons/fi";

interface IIMageUploadPreviewProps {
	label?: string;
	value?: string | null;
	onChange: (file: File) => void;
	className?: string;
}

const ImageUploadPreview = ({
	label,
	value,
	className,
	onChange,
}: IIMageUploadPreviewProps) => {
	const fileInputRef = useRef<HTMLInputElement | null>(null);

	const handleImageClick = () => fileInputRef.current?.click();

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0]) {
			const file = e.target.files[0];
			onChange(file);
		}
	};

	return (
		<div className={className}>
			<div
				onClick={handleImageClick}
				className="border-2 border-dashed border-primary bg-primary/5 h-50 rounded-lg flex flex-col items-center justify-center"
			>
				{value ? (
					<div className="relative max-w-47.5">
						<Image
							src={value}
							width={190}
							height={190}
							alt="preview product"
							className="w-full h-full object-cover"
						/>
					</div>
				) : (
					<>
						<FiUploadCloud className="text-primary" size={24} />
						<span className="text-sm font-medium">Click to Upload</span>
					</>
				)}

				<input
					ref={fileInputRef}
					type="file"
					accept="image/**"
					onChange={handleFileChange}
					hidden
				/>
			</div>
		</div>
	);
};

export default ImageUploadPreview;
