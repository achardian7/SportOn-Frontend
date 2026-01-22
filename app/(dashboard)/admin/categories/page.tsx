"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { FiPlus } from "react-icons/fi";

import { Category } from "@/app/types";
import Button from "@/app/(landing)/components/ui/button";
import {
	deleteCategory,
	getAllCategories,
} from "@/app/services/category.service";
import CategoryModal from "../../components/categories/category-modal";
import CategoryTable from "../../components/categories/category-table";
import DeleteModal from "../../components/ui/delete-modal";

const CategoryManagement = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedCategory, setSelectedCategory] = useState<Category | null>(
		null,
	);
	const [categories, setCategories] = useState<Category[]>([]);
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
	const [categoryToDeleteId, setCategoryToDeleteId] = useState("");

	const fetchCategories = async () => {
		try {
			const data = await getAllCategories();
			setCategories(data);
		} catch (error) {
			console.error("Failed to fetch categories", error);
		}
	};

	const handleEdit = (category: Category) => {
		setSelectedCategory(category);
		setIsModalOpen(true);
	};

	const handleDelete = (id: string) => {
		setCategoryToDeleteId(id);
		setIsDeleteModalOpen(true);
	};

	const handleDeleteConfirm = async () => {
		if (!categoryToDeleteId) return;
		try {
			await deleteCategory(categoryToDeleteId);
			fetchCategories();
			toast.success("Category deleted successfully");
			setIsDeleteModalOpen(false);
			setCategoryToDeleteId("");
		} catch (error) {
			console.error("Failed to delete category", error);
			toast.error("Failed to delete category");
		}
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
		setSelectedCategory(null);
	};

	useEffect(() => {
		// eslint-disable-next-line react-hooks/set-state-in-effect
		fetchCategories();
	}, []);

	return (
		<div>
			<div className="flex justify-between items-center mb-10">
				<div>
					<h1 className="font-bold text-2xl">Category Management</h1>
					<p className="opacity-50">Organize your products into categories.</p>
				</div>

				<Button onClick={() => setIsModalOpen(true)} className="rounded-lg">
					<FiPlus size={24} />
					Add Category
				</Button>
			</div>
			<CategoryTable
				categories={categories}
				onEdit={handleEdit}
				onDelete={handleDelete}
			/>
			<CategoryModal
				category={selectedCategory}
				isOpen={isModalOpen}
				onClose={handleCloseModal}
				onSuccess={fetchCategories}
			/>
			<DeleteModal
				isOpen={isDeleteModalOpen}
				onClose={() => setIsDeleteModalOpen(false)}
				onConfirm={handleDeleteConfirm}
			/>
		</div>
	);
};

export default CategoryManagement;
