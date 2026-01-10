"use client";

import { FiCheckCircle } from "react-icons/fi";
import { useRouter } from "next/navigation";

import priceFormatter from "@/app/utils/price-formatter";
import CardWithHeader from "../ui/card-with-header";
import Button from "../ui/button";
import FileUpload from "../ui/file-upload";

const PaymentSteps = () => {
	const { push } = useRouter();

	const uploadAndConfirm = () => {
		push("/order-status/123123123");
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
				<FileUpload />
			</div>

			<div className="p-4 border-t border-gray-200">
				<div className="flex justify-between font-semibold">
					<div className="text-sm">Total</div>
					<div className="text-primary text-xs">{priceFormatter(450000)}</div>
				</div>

				<Button
					onClick={uploadAndConfirm}
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
