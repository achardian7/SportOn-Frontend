"use client";

import { useRef, useState } from "react";
import { FiImage, FiTrash, FiUploadCloud } from "react-icons/fi";

interface IFileUpload {
	onFileSelect?: (file: File | null) => void;
}

const FileUpload = ({ onFileSelect }: IFileUpload) => {
	const [file, setFile] = useState<File | null>(null);
	const fileInputRef = useRef<HTMLInputElement | null>(null);

	const handleFileChange = (selectedFile?: File) => {
		if (!selectedFile) return;

		setFile(selectedFile);
		onFileSelect?.(selectedFile);
	};

	const removeFile = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation();

		setFile(null);
		onFileSelect?.(null);
	};

	return (
		<div
			onClick={() => fileInputRef.current?.click()}
			onDragOver={(e) => e.preventDefault()}
			onDrop={(e) => {
				e.preventDefault();
				handleFileChange(e.dataTransfer.files?.[0]);
			}}
			className="flex flex-col justify-center items-center w-full py-6 border border-primary border-dashed bg-primary-light cursor-pointer"
		>
			<input
				type="file"
				ref={fileInputRef}
				accept="image/**"
				className="hidden"
				hidden
				onChange={(e) => handleFileChange(e.target.files?.[0])}
			/>
			{!file ? (
				<div className="text-center my-5">
					<FiUploadCloud size={28} className="text-primary mx-auto" />
					<p className="text-xs">Upload Your Payment Receipt here</p>
				</div>
			) : (
				<div className="text-center">
					<FiImage className="text-primary mx-auto mb-4" size={28} />
					<p className="text-sm text-primary">{file.name}</p>
					<div className="text-sm text-gray-400">
						{(file.size / 1024).toFixed()} KB
					</div>

					<button
						onClick={removeFile}
						className="flex items-center gap-2 bg-primary/90 text-white mx-auto rounded mt-4 px-2"
					>
						<FiTrash /> Remove
					</button>
				</div>
			)}
		</div>
	);
};

export default FileUpload;
