import { useState } from "react";

import Button from "@/app/(landing)/components/ui/button";
import Modal from "../ui/modal";
import ImageUploadPreview from "../ui/image-upload-preview";

interface IProdcutModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const ProductModal = ({ isOpen, onClose }: IProdcutModalProps) => {
	const [imageFile, setImageFile] = useState<File | null>(null);
	const [imagePreview, setImagePreview] = useState<string | null>(null);

	return (
		<Modal isOpen={isOpen} onClose={onClose} title="Add New Product">
			<div className="flex flex-col gap-6">
				<div className="flex gap-7">
					<div className="min-w-50">
						<ImageUploadPreview
							onChange={(file) => {
								setImageFile(file);
								setImagePreview(URL.createObjectURL(file));
							}}
							label="Product Image"
							value={imagePreview}
						/>
					</div>
					<div className="flex flex-col gap-4 w-full">
						<div className="input-group-admin">
							<label htmlFor="productName">Product Name</label>
							<input
								type="text"
								id="productName"
								name="productName"
								placeholder="e. g. Running Shoes"
							/>
						</div>

						<div className="grid grid-cols-2 gap-4">
							<div className="input-group-admin">
								<label htmlFor="productPrice">Price (IDR)</label>
								<input
									type="text"
									id="productPrice"
									name="price"
									placeholder="e. g. 500000"
								/>
							</div>

							<div className="input-group-admin">
								<label htmlFor="stock">Stock</label>
								<input
									type="number"
									id="stock"
									name="stock"
									placeholder="e. g. 100"
								/>
							</div>
						</div>

						<div className="input-group-admin">
							<label htmlFor="category">Category</label>
							<select name="category" id="category">
								<option value="" disabled>
									Select Category
								</option>
								<option value="running">Running</option>
								<option value="football">Football</option>
							</select>
						</div>
					</div>
				</div>

				<div className="input-group-admin">
					<label htmlFor="description">Description</label>
					<textarea
						id="description"
						name="description"
						rows={7}
						placeholder="Product details..."
					/>
				</div>

				<Button className="ml-auto mt-3 rounded-lg">Create Product</Button>
			</div>
		</Modal>
	);
};

export default ProductModal;
