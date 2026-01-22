import { fetchAPI, getAuthHeaders } from "../lib/api";
import { Product } from "../types";

export const getAllProducts = async (): Promise<Product[]> => {
	const res = await fetchAPI<Product[]>("/products");

	return res;
};

export const getProductDetail = async (id: string): Promise<Product> => {
	const res = await fetchAPI<Product>(`/products/${id}`);

	return res;
};

export const createProduct = async (data: FormData): Promise<Product> => {
	const res = await fetchAPI<Product>("/products", {
		method: "POST",
		headers: {
			...getAuthHeaders(),
		},
		body: data,
	});

	return res;
};

export const updateProduct = async (
	id: string,
	data: FormData,
): Promise<Product> => {
	const res = await fetchAPI<Product>(`/products/${id}`, {
		method: "PUT",
		headers: {
			...getAuthHeaders(),
		},
		body: data,
	});

	return res;
};

export const deleteProduct = async (id: string): Promise<void> => {
	const res = await fetchAPI<void>(`/products/${id}`, {
		method: "DELETE",
		headers: {
			...getAuthHeaders(),
		},
	});

	return res;
};
