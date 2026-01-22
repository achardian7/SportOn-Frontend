import { fetchAPI, getAuthHeaders } from "../lib/api";
import { Category } from "../types";

export const getAllCategories = async (): Promise<Category[]> => {
	const res = await fetchAPI<Category[]>("/categories");

	return res;
};

export const createCategory = async (data: FormData): Promise<Category> => {
	const res = await fetchAPI<Category>("/categories", {
		method: "POST",
		headers: {
			...getAuthHeaders(),
		},
		body: data,
	});

	return res;
};

export const updateCategory = async (
	id: string,
	data: FormData,
): Promise<Category> => {
	const res = await fetchAPI<Category>(`/categories/${id}`, {
		method: "PUT",
		headers: {
			...getAuthHeaders(),
		},
		body: data,
	});

	return res;
};

export const deleteCategory = async (id: string): Promise<void> => {
	const res = await fetchAPI<void>(`/categories/${id}`, {
		method: "DELETE",
		headers: {
			...getAuthHeaders(),
		},
	});

	return res;
};
