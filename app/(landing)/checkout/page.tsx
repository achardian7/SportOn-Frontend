"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

import { ICustomerInfo, useCartStore } from "@/app/hooks/use-cart-store";
import CartItems from "../components/checkout/cart-items";
import OrderInformation from "../components/checkout/order-information";

const Checkout = () => {
	const { push } = useRouter();
	const { setCustomerInfo } = useCartStore();
	const [formData, setFormData] = useState<ICustomerInfo>({
		customerName: "",
		customerContact: null,
		customerAddress: "",
	});

	const handlePayment = () => {
		if (
			!formData?.customerName ||
			!formData.customerContact ||
			!formData.customerAddress
		) {
			toast.error("Please fill in all fields", { position: "top-center" });
			return;
		}

		setCustomerInfo(formData);
		push("/payment");
	};

	return (
		<main className="min-h-[80vh] bg-gray-100 pt-20">
			<div className="max-w-5xl mx-auto py-20">
				<h1 className="text-5xl font-bold text-center mb-10">Checkout Now</h1>

				<div className="grid grid-cols-2 gap-14">
					<OrderInformation formData={formData} setFormData={setFormData} />
					<CartItems handlePayment={handlePayment} />
				</div>
			</div>
		</main>
	);
};

export default Checkout;
