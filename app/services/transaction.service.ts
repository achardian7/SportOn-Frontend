import { fetchAPI } from "../lib/api";
import { Transaction } from "../types";

export const transactionCheckout = async (
	formData: FormData
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
