import { useState } from "react";
import Image from "next/image";
import { FiCheck, FiX } from "react-icons/fi";

import priceFormatter from "@/app/utils/price-formatter";
import Button from "@/app/(landing)/components/ui/button";
import { Transaction } from "@/app/types";
import { getImageUrl } from "@/app/lib/api";
import Modal from "../ui/modal";

interface ITransactionModalProps {
	isOpen: boolean;
	onClose: () => void;
	transaction: Transaction | null;
	onStatusChange: (id: string, status: "paid" | "rejected") => Promise<void>;
}

const TransactionModal = ({
	isOpen,
	onClose,
	transaction,
	onStatusChange,
}: ITransactionModalProps) => {
	const [isUpdating, setIsUpdating] = useState(false);

	if (!transaction) return;

	const handleStatusUpdate = async (status: "paid" | "rejected") => {
		setIsUpdating(true);
		try {
			await onStatusChange(transaction._id, status);
		} catch (error) {
			console.error(error);
		} finally {
			setIsUpdating(false);
		}
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose} title="Verify Transactions">
			<div className="flex gap-6">
				<div>
					<h4 className="text-sm font-semibold mb-2">Payment Proof</h4>
					{transaction.paymentProof ? (
						<Image
							src={getImageUrl(transaction.paymentProof)}
							alt="payment proof"
							width={200}
							height={401}
						/>
					) : (
						<div className="text-center p-4">
							<p className="text-sm">No Payment proof uploaded</p>
						</div>
					)}
				</div>

				<div className="flex-1">
					<h4 className="text-sm font-semibold mb-2">Order Details</h4>
					<div className="bg-gray-100 rounded-md flex flex-col gap-2.5 text-sm mb-5 p-4">
						<div className="flex justify-between font-medium">
							<div className="opacity-50">Date</div>
							<div className="text-right">
								{new Date(transaction.createdAt).toLocaleDateString("id-ID", {
									day: "numeric",
									month: "short",
									year: "numeric",
									hour: "2-digit",
									minute: "2-digit",
								})}
							</div>
						</div>
						<div className="flex justify-between font-medium">
							<div className="opacity-50">Customer</div>
							<div className="text-right">{transaction.customerName}</div>
						</div>
						<div className="flex justify-between font-medium">
							<div className="opacity-50">Contact</div>
							<div className="text-right">{transaction.customerContact}</div>
						</div>

						<div className="flex justify-between gap-10 font-medium">
							<div className="opacity-50 whitespace-nowrap">
								Shipping Address
							</div>
							<div className="text-right">{transaction.customerAddress}</div>
						</div>
					</div>

					<h4 className="text-sm font-semibold mb-2">Items Purchased</h4>
					{transaction.purchasedItems.map((item) => (
						<div
							key={item.productId._id}
							className="border border-gray-200 rounded-lg p-2 gap-2 flex items-center"
						>
							<div className="bg-gray-100 rounded aspect-square size-8 flex items-center justify-center">
								<Image
									src={getImageUrl(item.productId?.imageUrl)}
									alt="product"
									width={30}
									height={30}
								/>
							</div>
							<div className="font-medium text-sm">{item.productId.name}</div>
							<div className="font-medium ml-auto text-sm">
								{item.qty} units
							</div>
						</div>
					))}

					<div className="flex justify-between text-sm mt-12">
						<div className="font-semibold">Total</div>
						<div className="text-primary font-semibold">
							{priceFormatter(Number(transaction.totalPayment))}
						</div>
					</div>

					<div className="flex justify-end gap-5 mt-12">
						{isUpdating ? (
							<p className="text-center">Updating...</p>
						) : (
							<>
								<Button
									disabled={isUpdating}
									className="text-primary! bg-primary-light! rounded-md"
									onClick={() => handleStatusUpdate("rejected")}
								>
									<FiX size={20} /> Reject
								</Button>

								<Button
									disabled={isUpdating}
									className="bg-[#50C252]! text-white! rounded-md"
									onClick={() => handleStatusUpdate("paid")}
								>
									<FiCheck size={20} /> Approve
								</Button>
							</>
						)}
					</div>
				</div>
			</div>
		</Modal>
	);
};

export default TransactionModal;
