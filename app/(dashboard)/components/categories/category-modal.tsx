import { useEffect, useState } from "react";

import Button from "@/app/(landing)/components/ui/button";
import { Category } from "@/app/types";
import { getImageUrl } from "@/app/lib/api";
import Modal from "../ui/modal";
import ImageUploadPreview from "../ui/image-upload-preview";
import {
	createCategory,
	updateCategory,
} from "@/app/services/category.service";
import { toast } from "react-toastify";

interface ICategoryModalProps {
	isOpen: boolean;
	onClose: () => void;
	onSuccess: () => void;
	category?: Category | null;
}

type CategoryFormData = {
	name: string;
	description: string;
};

const CategoryModal = ({
	isOpen,
	onClose,
	category,
	onSuccess,
}: ICategoryModalProps) => {
	const [imageFile, setImageFile] = useState<File | null>(null);
	const [imagePreview, setImagePreview] = useState<string | null>(null);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const isEditMode = !!category;

	const [formData, setFormData] = useState<CategoryFormData>({
		name: "",
		description: "",
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setFormData((prevData) => ({
			...prevData,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		try {
			const data = new FormData();
			data.append("name", formData.name);
			data.append("description", formData.description);
			if (imageFile) {
				data.append("image", imageFile);
			}

			if (isEditMode) {
				await updateCategory(category._id, data);
			} else {
				await createCategory(data);
			}

			toast.success(
				isEditMode
					? "Category updated successfully"
					: "Category created successfully",
			);

			setFormData({
				name: "",
				description: "",
			});
			setImageFile(null);
			setImagePreview(null);

			onSuccess?.();
			onClose();
		} catch (error) {
			console.error(
				isEditMode ? "Failed to update category" : "Failed to create category",
			);
			toast.error(
				isEditMode ? "Failed to update category" : "Failed to create category",
			);
		} finally {
			setIsSubmitting(false);
		}
	};

	useEffect(() => {
		if (isEditMode && isOpen) {
			// eslint-disable-next-line react-hooks/set-state-in-effect
			setFormData({
				name: category.name,
				description: category.description,
			});
			setImagePreview(
				category.imageUrl ? getImageUrl(category.imageUrl) : null,
			);
		} else {
			setFormData({
				name: "",
				description: "",
			});
			setImageFile(null);
			setImagePreview(null);
		}
	}, [category, isOpen, isEditMode]);

	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			title={isEditMode ? "Edit Category" : "Add New Category"}
		>
			<form onSubmit={handleSubmit} className="flex flex-col gap-6">
				<div className="flex gap-7">
					<div className="min-w-50">
						<ImageUploadPreview
							label="Category Image"
							value={imagePreview}
							onChange={(file) => {
								setImageFile(file);
								setImagePreview(URL.createObjectURL(file));
							}}
						/>
					</div>
					<div className="flex flex-col gap-4 w-full">
						<div className="input-group-admin">
							<label htmlFor="categoryName">Category Name</label>
							<input
								type="text"
								id="categoryName"
								name="name"
								value={formData.name}
								onChange={handleChange}
								placeholder="e. g. Running"
							/>
						</div>

						<div className="input-group-admin">
							<label htmlFor="description">Description</label>
							<textarea
								name="description"
								id="description"
								value={formData.description}
								onChange={handleChange}
								rows={4}
								placeholder="Category Details..."
							></textarea>
						</div>
					</div>
				</div>
				<Button disabled={isSubmitting} className="ml-auto mt-3 rounded-lg">
					{isEditMode ? "Update Category" : "Create Category"}
				</Button>
			</form>
		</Modal>
	);
};

export default CategoryModal;
