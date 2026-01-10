import { FiCreditCard } from "react-icons/fi";

import CardWithHeader from "../ui/card-with-header";

const paymentOptions = [
	{
		bank_name: "BCA",
		account_number: 1231231231231,
		account_holder: "PT SportsOn Digital",
	},
	{
		bank_name: "Mandiri",
		account_number: 89458434,
		account_holder: "PT SportsOn Digital",
	},
	{
		bank_name: "BRI",
		account_number: 123891283912,
		account_holder: "PT SportsOn Digital",
	},
];

const PaymentOptions = () => {
	return (
		<CardWithHeader title="Payment Options">
			{paymentOptions.map((payment, i) => (
				<div
					key={i}
					className="flex items-center gap-5 p-5 border-b border-gray-100"
				>
					<div className="bg-blue-100 p-4 text-blue-500 h-fit">
						<FiCreditCard size={24} />
					</div>

					<div>
						<div className="font-bold">{payment.bank_name}</div>
						<div className="text-sm">{payment.account_number}</div>
						<div className="text-sm opacity-70">{payment.account_holder}</div>
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
