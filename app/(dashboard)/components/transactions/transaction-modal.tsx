import Image from "next/image";
import { FiCheck, FiX } from "react-icons/fi";

import priceFormatter from "@/app/utils/price-formatter";
import Button from "@/app/(landing)/components/ui/button";
import Modal from "../ui/modal";

interface ITransactionModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const TransactionModal = ({ isOpen, onClose }: ITransactionModalProps) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose} title="Verify Transactions">
			<div className="flex gap-6">
				<div>
					<h4 className="text-sm font-semibold mb-2">Payment Proof</h4>
					<Image
						src="/images/payment-proof-dummy.png"
						alt="payment proof"
						width={200}
						height={401}
					/>
				</div>

				<div className="flex-1">
					<h4 className="text-sm font-semibold mb-2">Order Details</h4>
					<div className="bg-gray-100 rounded-md flex flex-col gap-2.5 text-sm mb-5 p-4">
						<div className="flex justify-between font-medium">
							<div className="opacity-50">Date</div>
							<div className="text-right">23/02/2026 19:32</div>
						</div>
						<div className="flex justify-between font-medium">
							<div className="opacity-50">Customer</div>
							<div className="text-right">John Doe</div>
						</div>
						<div className="flex justify-between font-medium">
							<div className="opacity-50">Contact</div>
							<div className="text-right">+123123123</div>
						</div>

						<div className="flex justify-between gap-10 font-medium">
							<div className="opacity-50 whitespace-nowrap">
								Shipping Address
							</div>
							<div className="text-right">
								Merdeka Street, Jakarta, Indonesia, 332122
							</div>
						</div>
					</div>

					<h4 className="text-sm font-semibold mb-2">Items Purchased</h4>
					<div className="border border-gray-200 rounded-lg p-2 gap-2 flex items-center">
						<div className="bg-gray-100 rounded aspect-square size-8 flex items-center justify-center">
							<Image
								src="/images/products/product-4.png"
								alt="product"
								width={30}
								height={30}
							/>
						</div>
						<div className="font-medium text-sm">SportsOn Hyperfast Shoes</div>
						<div className="font-medium ml-auto text-sm">3 units</div>
					</div>

					<div className="flex justify-between text-sm mt-12">
						<div className="font-semibold">Total</div>
						<div className="text-primary font-semibold">
							{priceFormatter(430000)}
						</div>
					</div>

					<div className="flex justify-end gap-5 mt-12">
						<Button className="text-primary! bg-primary-light! rounded-md">
							<FiX size={20} /> Reject
						</Button>

						<Button className="bg-[#50C252]! text-white! rounded-md">
							<FiCheck size={20} /> Approve
						</Button>
					</div>
				</div>
			</div>
		</Modal>
	);
};

export default TransactionModal;
