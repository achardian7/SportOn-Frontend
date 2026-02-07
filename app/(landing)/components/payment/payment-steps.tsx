"use client";

import { FiCheckCircle } from "react-icons/fi";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

import priceFormatter from "@/app/utils/price-formatter";
import { useCartStore } from "@/app/hooks/use-cart-store";
import { transactionCheckout } from "@/app/services/transaction.service";
import CardWithHeader from "../ui/card-with-header";
import Button from "../ui/button";
import FileUpload from "../ui/file-upload";

const PaymentSteps = () => {
	const { push } = useRouter();
	const [file, setFile] = useState<File | null>(null);
	const { customerInfo, items, reset } = useCartStore();

	const totalPrice = items.reduce(
		(total, item) => total + item.price * item.qty,
		0,
	);

	const handleConfirmPayment = async () => {
		if (!file) {
			toast.error("Please upload your payment receipt", {
				position: "top-center",
			});
			return;
		}

		if (!customerInfo) {
			toast.error(
				"Customer information is missing, please return to checkout",
				{
					position: "top-center",
				},
			);
			push("/checkout");
			return;
		}

		try {
			const formData = new FormData();
			formData.append("customerName", customerInfo.customerName);
			formData.append(
				"customerContact",
				customerInfo.customerContact!.toString(),
			);
			formData.append("customerAddress", customerInfo.customerAddress);
			formData.append("image", file);
			formData.append(
				"purchasedItems",
				JSON.stringify(
					items.map((item) => ({ productId: item._id, qty: item.qty })),
				),
			);
			formData.append("totalPayment", totalPrice.toString());

			const res = await transactionCheckout(formData);

			toast.success("Transaction created successfully", {
				position: "top-center",
			});

			reset();

			push(`/order-status/${res._id}`);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<CardWithHeader title="Payment Steps">
			<div className="p-5">
				<ol className="list-decimal text-xs pl-2 flex flex-col gap-4 mb-5">
					<li>
						Transfer the total amount of <b>Rp. 1.035.000</b> to your preferred
						bank account listed under &apos;Payment Options&apos; (BCA, Mandiri,
						or BTPN).
					</li>
					<li>
						After completing the transfer, <b>keep the payment receipt</b> or a
						screenshot of the transfer confirmation. This will be needed for the
						next step.
					</li>
					<li>
						Upload the payment receipt/screenshot using the{" "}
						<b>&apos;Upload Receipt & Confirm&apos;</b> button below to validate
						your transaction.
					</li>
				</ol>

				{/* fiel upload goes here */}
				<FileUpload onFileSelect={setFile} />
			</div>

			<div className="p-4 border-t border-gray-200">
				<div className="flex justify-between font-semibold">
					<div className="text-sm">Total</div>
					<div className="text-primary text-xs">
						{priceFormatter(totalPrice)}
					</div>
				</div>

				<Button
					onClick={handleConfirmPayment}
					variant="dark"
					className="w-full mt-4"
				>
					<FiCheckCircle />
					Upload Receipt & Confirm
				</Button>
			</div>
		</CardWithHeader>
	);
};

export default PaymentSteps;
