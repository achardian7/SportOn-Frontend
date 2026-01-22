/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { FiPlus } from "react-icons/fi";

import Button from "@/app/(landing)/components/ui/button";
import { Bank } from "@/app/types";
import { deleteBank, getAllBanks } from "@/app/services/bank.service";
import DeleteModal from "../../components/ui/delete-modal";
import BankInfoModel from "../../components/bank-info/bank-info-modal";
import BankInfoList from "../../components/bank-info/bank-info-list";

const BankInfoManagement = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [banks, setBanks] = useState<Bank[]>([]);
	const [selectedBank, setSelectedBank] = useState<Bank | null>(null);
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
	const [bankToDeleteId, setBankToDeleteId] = useState("");

	const fetchBanks = async () => {
		try {
			const data = await getAllBanks();
			setBanks(data);
		} catch (error) {
			console.error("Failed to fetch bank data", error);
		}
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
		setSelectedBank(null);
	};

	const handleEdit = (bank: Bank) => {
		setSelectedBank(bank);
		setIsModalOpen(true);
	};

	const handleDelete = (id: string) => {
		setBankToDeleteId(id);
		setIsDeleteModalOpen(true);
	};

	const handleDeleteConfirm = async () => {
		if (!bankToDeleteId) return;

		try {
			await deleteBank(bankToDeleteId);
			toast.success("Bank info deleted succesfully");
			setBankToDeleteId("");
			setIsDeleteModalOpen(false);
			fetchBanks();
		} catch (error) {
			console.error("Failed to delete bank info");
			toast.error("Failed to delete bank info ");
		}
	};

	useEffect(() => {
		fetchBanks();
	}, []);

	return (
		<div>
			<div className="flex justify-between items-center mb-10">
				<div>
					<h1 className="font-bold text-2xl">Bank Information</h1>
					<p className="opacity-50">
						Manage destination accounts for customer transfers.
					</p>
				</div>

				<Button onClick={() => setIsModalOpen(true)} className="rounded-lg">
					<FiPlus size={24} />
					Add Bank Account
				</Button>
			</div>

			<BankInfoList banks={banks} onEdit={handleEdit} onDelete={handleDelete} />
			<BankInfoModel
				bank={selectedBank}
				onSuccess={fetchBanks}
				isOpen={isModalOpen}
				onClose={handleCloseModal}
			/>
			<DeleteModal
				isOpen={isDeleteModalOpen}
				onClose={() => setIsDeleteModalOpen(false)}
				onConfirm={handleDeleteConfirm}
			/>
		</div>
	);
};

export default BankInfoManagement;
