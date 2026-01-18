"use client";

import { useState } from "react";
import { FiPlus } from "react-icons/fi";

import Button from "@/app/(landing)/components/ui/button";
import BankInfoList from "../../components/bank-info/bank-info-list";
import BankInfoModel from "../../components/bank-info/bank-info-modal";

const BankInfoManagement = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleCloseModal = () => {
		setIsOpen(false);
	};

	return (
		<div>
			<div className="flex justify-between items-center mb-10">
				<div>
					<h1 className="font-bold text-2xl">Bank Information</h1>
					<p className="opacity-50">
						Manage destination accounts for customer transfers.
					</p>
				</div>

				<Button onClick={() => setIsOpen(true)} className="rounded-lg">
					<FiPlus size={24} />
					Add Bank Account
				</Button>
			</div>

			<BankInfoList />
			<BankInfoModel isOpen={isOpen} onClose={handleCloseModal} />
		</div>
	);
};

export default BankInfoManagement;
