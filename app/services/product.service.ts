import { fetchAPI } from "../lib/api";
import { Product } from "../types";

export const getAllProducts = async (): Promise<Product[]> => {
	const res = await fetchAPI<Product[]>("/products");

	return res;
};

export const getProductDetail = async (id: string): Promise<Product> => {
	const res = await fetchAPI<Product>(`/products/${id}`);

	return res;
};
