import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import Button from "@/app/(landing)/components/ui/button";
import { Bank } from "@/app/types";
import { createBank, updateBank } from "@/app/services/bank.service";
import Modal from "../ui/modal";

interface IBankInfoModalProps {
	isOpen: boolean;
	onClose: () => void;
	bank: Bank | null;
	onSuccess: () => void;
}

const BankInfoModel = ({
	isOpen,
	onClose,
	bank,
	onSuccess,
}: IBankInfoModalProps) => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [formData, setFormData] = useState<Partial<Bank>>({
		accountName: "",
		accountNumber: "",
		bankName: "",
	});

	const isEditMode = !!bank;

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setFormData((prevData) => ({
			...prevData,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		try {
			if (isEditMode) {
				await updateBank(bank._id, formData);
			} else {
				await createBank(formData);
			}

			setFormData({
				accountName: "",
				accountNumber: "",
				bankName: "",
			});
			onSuccess?.();
			onClose();
			toast.success(
				isEditMode
					? "Bank info updated successfully"
					: "Bank info created succesfully",
			);
		} catch (error) {
			console.error(
				isEditMode
					? "Failed to update bank info"
					: "Failed to create bank info",
				error,
			);
			toast.error(
				isEditMode
					? "Failed to update bank info"
					: "Failed to create bank info",
			);
		} finally {
			setIsSubmitting(false);
		}
	};

	useEffect(() => {
		if (bank && isOpen) {
			setFormData({
				bankName: bank.bankName,
				accountName: bank.accountName,
				accountNumber: bank.accountNumber,
			});
		} else if (isOpen) {
			setFormData({
				bankName: "",
				accountName: "",
				accountNumber: "",
			});
		}
	}, [bank, isOpen, isEditMode]);

	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			title={isEditMode ? "Edit Bank Info" : "Add Bank Account"}
		>
			<form onSubmit={handleSubmit} className="flex flex-col gap-6">
				<div className="flex gap-7">
					<div className="flex flex-col gap-4 w-full">
						<div className="input-group-admin">
							<label htmlFor="bankName">Bank Name</label>
							<input
								type="text"
								id="bankName"
								name="bankName"
								placeholder="e. g. Mandiri, BCA, BRI"
								value={formData.bankName}
								onChange={handleChange}
							/>
						</div>
						<div className="input-group-admin">
							<label htmlFor="accountNumber">Account Number</label>
							<input
								type="text"
								id="accountNumber"
								name="accountNumber"
								placeholder="123124344234234"
								value={formData.accountNumber}
								onChange={handleChange}
							/>
						</div>
						<div className="input-group-admin">
							<label htmlFor="accountName">Account Name / Holder</label>
							<input
								type="text"
								id="accountName"
								name="accountName"
								placeholder="Holder Name as registered on the account"
								value={formData.accountName}
								onChange={handleChange}
							/>
						</div>
					</div>
				</div>
				<Button disabled={isSubmitting} className="ml-auto mt-3 rounded-lg">
					{isEditMode ? "Update Bank Info" : "Create Bank Info"}
				</Button>
			</form>
		</Modal>
	);
};

export default BankInfoModel;
