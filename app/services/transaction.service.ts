import { fetchAPI, getAuthHeaders } from "../lib/api";
import { Transaction } from "../types";

export const transactionCheckout = async (
	formData: FormData,
): Promise<Transaction> => {
	const res = await fetchAPI<Transaction>("/transactions", {
		method: "POST",
		body: formData,
	});

	return res;
};

export const getTransactionById = async (id: string): Promise<Transaction> => {
	const res = await fetchAPI<Transaction>(`/transactions/${id}`);

	return res;
};

export const getAllTransactions = async (): Promise<Transaction[]> => {
	const res = await fetchAPI<Transaction[]>("/transactions", {
		method: "GET",
		headers: {
			...getAuthHeaders(),
		},
	});

	return res;
};

export const updateTransaction = async (
	id: string,
	data: FormData,
): Promise<Transaction> => {
	const res = await fetchAPI<Transaction>(`/transactions/${id}`, {
		method: "PUT",
		headers: {
			...getAuthHeaders(),
		},
		body: data,
	});

	return res;
};
