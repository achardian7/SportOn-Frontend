"use client";

import Image from "next/image";
import { FiCreditCard, FiTrash } from "react-icons/fi";

import priceFormatter from "@/app/utils/price-formatter";
import { useCartStore } from "@/app/hooks/use-cart-store";
import { getImageUrl } from "@/app/lib/api";
import CardWithHeader from "../ui/card-with-header";
import Button from "../ui/button";

interface ICartItemsProps {
	handlePayment: () => void;
}

const CartItems = ({ handlePayment }: ICartItemsProps) => {
	const { items: cartItems, removeItem } = useCartStore();

	const totalPrice = cartItems.reduce(
		(total, item) => total + item.price * item.qty,
		0
	);

	return (
		<CardWithHeader title="Cart Items">
			<div className="flex flex-col justify-between h-[calc(100%-70px)]">
				<div className="overflow-auto max-h-75">
					{cartItems.map((item, i) => (
						<div key={i} className="flex gap-3 border-b border-gray-200 p-4">
							<div className="w-16 bg-primary-light flex items-center justify-center aspect-square">
								<Image
									src={getImageUrl(item.imageUrl)}
									alt={item.name}
									width={63}
									height={63}
									className="aspect-square object-contain"
								/>
							</div>

							<div className="self-center">
								<div className="text-sm font-medium">{item.name}</div>
								<div className="flex gap-3 font-medium text-xs">
									<div>{item.qty}x</div>
									<div className="text-primary">
										{priceFormatter(item.price)}
									</div>
								</div>
							</div>

							<Button
								variant="ghost"
								size="small"
								className="size-7 self-center ml-auto p-0!"
								onClick={() => removeItem(item._id)}
							>
								<FiTrash />
							</Button>
						</div>
					))}
				</div>
				<div className="border-t border-gray-200 p-4">
					<div className="flex justify-between font-semibold">
						<div className="font-bold">Total</div>
						<div className="text-primary text-xs">
							{priceFormatter(totalPrice)}
						</div>
					</div>

					<Button
						onClick={handlePayment}
						variant="dark"
						className="w-full mt-4"
					>
						<FiCreditCard />
						Proceed to payment
					</Button>
				</div>
			</div>
		</CardWithHeader>
	);
};

export default CartItems;
