import { fetchAPI, getAuthHeaders } from "../lib/api";
import { Bank } from "../types";

export const getAllBanks = async (): Promise<Bank[]> => {
	const res = await fetchAPI<Bank[]>("/banks");

	return res;
};

export const createBank = async (data: Partial<Bank>): Promise<Bank> => {
	const res = await fetchAPI<Bank>("/banks", {
		method: "POST",
		headers: {
			...getAuthHeaders(),
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});

	return res;
};

export const updateBank = async (
	id: string,
	data: Partial<Bank>,
): Promise<Bank> => {
	const res = await fetchAPI<Bank>(`/banks/${id}`, {
		method: "PUT",
		headers: {
			...getAuthHeaders(),
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});

	return res;
};

export const deleteBank = async (id: string): Promise<void> => {
	const res = await fetchAPI<void>(`/banks/${id}`, {
		method: "DELETE",
		headers: {
			...getAuthHeaders(),
			"Content-Type": "application/json",
		},
	});

	return res;
};
