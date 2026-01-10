"use client";

import Image from "next/image";
import { FiRefreshCw } from "react-icons/fi";

import Button from "../ui/button";

const OrderSubmitted = () => {
	const reloadOrderStatus = () => {
		window.location.reload();
	};

	return (
		<div className="bg-white w-160 p-16 mx-auto flex flex-col justify-center items-center">
			<div className="p-6 bg-blue-200/40 rounded-full mb-4">
				<Image
					src="/images/cart-icon.svg"
					alt="checklist"
					width={74}
					height={74}
				/>
			</div>
			<h2 className="text-2xl font-semibold mb-2">Order Submitted !!</h2>
			<p className="text-center mb-8">
				Your Order is recorded in our system, we are still confirming the
				payment status, please wait and your order status will be updated in
				less than 12 hours.
			</p>
			<Button onClick={reloadOrderStatus} variant="dark" className="w-full">
				<FiRefreshCw /> Refresh Order Status
			</Button>
		</div>
	);
};

export default OrderSubmitted;
