import { FiCreditCard } from "react-icons/fi";

import CardWithHeader from "../ui/card-with-header";
import { getAllBanks } from "@/app/services/bank.service";

const PaymentOptions = async () => {
	const banks = await getAllBanks();

	return (
		<CardWithHeader title="Payment Options">
			{banks.map((payment, i) => (
				<div
					key={i}
					className="flex items-center gap-5 p-5 border-b border-gray-100"
				>
					<div className="bg-blue-100 p-4 text-blue-500 h-fit">
						<FiCreditCard size={24} />
					</div>

					<div>
						<div className="font-bold">{payment.bankName}</div>
						<div className="text-sm">{payment.accountNumber}</div>
						<div className="text-sm opacity-70">{payment.accountName}</div>
					</div>

					<div className="ml-auto bg-blue-50 text-gray-800 px-2 py-1 text-xs h-fit">
						Bank Transfer
					</div>
				</div>
			))}
		</CardWithHeader>
	);
};

export default PaymentOptions;
