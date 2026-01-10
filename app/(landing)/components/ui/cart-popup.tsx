import Image from "next/image";
import { useRouter } from "next/navigation";
import { FiArrowRight, FiTrash } from "react-icons/fi";

import priceFormatter from "@/app/utils/price-formatter";
import Button from "./button";

export const cartItems = [
	{
		name: "SportsOn Product 1",
		category: "Running",
		price: 450000,
		qty: 2,
		imgUrl: "product-1.png",
	},
	{
		name: "SportsOn Product 2",
		category: "Tennis",
		price: 250000,
		qty: 2,
		imgUrl: "product-2.png",
	},
	{
		name: "SportsOn Product 3",
		category: "Running",
		price: 230000,
		qty: 1,
		imgUrl: "product-3.png",
	},
];

const CartPopup = () => {
	const { push } = useRouter();

	const totalPrice = cartItems.reduce(
		(total, item) => total + item.qty * item.price,
		0
	);

	const handleCheckout = () => {
		push("/checkout");
	};

	return (
		<div className="absolute bg-white right-0 top-12 shadow-xl shadow-black/10 border border-gray-200 w-90 z-10">
			<div className="p-4 border-b border-gray-200 font-bold text-center">
				Shopping Cart
			</div>
			{cartItems.map((item, i) => (
				<div key={i} className="p-4 border-b border-gray-200 flex gap-3">
					<div className="bg-primary-light aspect-square w-16 flex justify-center items-center">
						<Image
							src={`/images/products/${item.imgUrl}`}
							alt={item.name}
							width={63}
							height={63}
							className="aspect-square object-contain"
						/>
					</div>
					<div className="self-center">
						<div className="text-sm font-medium">{item.name}</div>
						<div className="flex gap-3 text-xs font-medium">
							<div>{item.qty}x</div>
							<div className="text-primary">{priceFormatter(item.price)}</div>
						</div>
					</div>

					<Button
						size="small"
						variant="ghost"
						className="size-7 p-0! self-center ml-auto"
					>
						<FiTrash />
					</Button>
				</div>
			))}

			<div className="border-t border-gray-200 p-4">
				<div className="flex items-center justify-between font-semibold">
					<div className="text-sm">Total</div>
					<div className="text-xs text-primary">
						{priceFormatter(totalPrice)}
					</div>
				</div>
				<Button
					onClick={handleCheckout}
					variant="dark"
					size="small"
					className="w-full mt-4"
				>
					Checkout Now <FiArrowRight />
				</Button>
			</div>
		</div>
	);
};

export default CartPopup;
