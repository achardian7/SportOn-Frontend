"use client";

import { Dispatch, SetStateAction } from "react";

import { ICustomerInfo } from "@/app/hooks/use-cart-store";
import CardWithHeader from "../ui/card-with-header";

interface IOrderInformationProps {
	formData: ICustomerInfo;
	setFormData: Dispatch<SetStateAction<ICustomerInfo>>;
}

const OrderInformation = ({
	formData,
	setFormData,
}: IOrderInformationProps) => {
	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData((prevData) => ({
			...prevData,
			[e.target.name]: e.target.value,
		}));
	};

	return (
		<CardWithHeader title="Order Information">
			<div className="p-5">
				<div className="input-group">
					<label htmlFor="full_name">Full Name</label>
					<input
						name="customerName"
						type="text"
						placeholder="Type your full name"
						id="full_name"
						value={formData.customerName}
						onChange={handleChange}
					/>
				</div>

				<div className="input-group">
					<label htmlFor="wa_number">Whatsapp Number</label>
					<input
						name="customerContact"
						type="number"
						placeholder="+62xxxx"
						id="wa_number"
						value={formData.customerContact ?? ""}
						onChange={handleChange}
					/>
				</div>

				<div className="input-group">
					<label htmlFor="shipping_address">Shipping Address</label>
					<textarea
						name="customerAddress"
						placeholder="Example Street, 18, West Jakarta, Indonesia, 66521"
						id="shipping_address"
						rows={7}
						value={formData.customerAddress}
						onChange={handleChange}
					/>
				</div>
			</div>
		</CardWithHeader>
	);
};

export default OrderInformation;
