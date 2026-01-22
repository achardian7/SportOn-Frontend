"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { FiPlus } from "react-icons/fi";

import { Product } from "@/app/types";
import Button from "@/app/(landing)/components/ui/button";
import { deleteProduct, getAllProducts } from "@/app/services/product.service";
import ProductTable from "../../components/products/product-table";
import ProductModal from "../../components/products/product-modal";
import DeleteModal from "../../components/ui/delete-modal";

const ProductManagement = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [products, setProducts] = useState<Product[]>([]);
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
	const [productToDeleteId, setProductToDeleteId] = useState("");

	const fetchProducts = async () => {
		try {
			const data = await getAllProducts();
			if (data) {
				setProducts(data);
			}
		} catch (error) {
			console.error("Failed to fetch products", error);
		}
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
		setSelectedProduct(null);
	};

	const handleEdit = (product: Product) => {
		setSelectedProduct(product);
		setIsModalOpen(true);
	};

	const handleDelete = (id: string) => {
		setProductToDeleteId(id);
		setIsDeleteModalOpen(true);
	};

	const handleDeleteConfirm = async () => {
		if (!productToDeleteId) return;
		try {
			await deleteProduct(productToDeleteId);
			fetchProducts();
			toast.success("Product deleted successfully");
			setIsDeleteModalOpen(false);
			setProductToDeleteId("");
		} catch (error) {
			console.error("Failed to delete product", error);
			toast.error("Failed to delete product");
		}
	};

	useEffect(() => {
		// eslint-disable-next-line react-hooks/set-state-in-effect
		fetchProducts();
	}, []);

	return (
		<div>
			<div className="flex justify-between items-center mb-10">
				<div>
					<h1 className="font-bold text-2xl">Product Management</h1>
					<p className="opacity-50">Manage your inventory, prices and stock.</p>
				</div>

				<Button onClick={() => setIsModalOpen(true)} className="rounded-lg">
					<FiPlus size={24} />
					Add Product
				</Button>
			</div>
			<ProductTable
				products={products}
				onEdit={handleEdit}
				onDelete={handleDelete}
			/>
			<ProductModal
				isOpen={isModalOpen}
				onClose={handleCloseModal}
				onSuccess={fetchProducts}
				product={selectedProduct}
			/>
			<DeleteModal
				isOpen={isDeleteModalOpen}
				onClose={() => setIsDeleteModalOpen(false)}
				onConfirm={handleDeleteConfirm}
			/>
		</div>
	);
};

export default ProductManagement;
