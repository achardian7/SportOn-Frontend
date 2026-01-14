"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
	FiArrowRight,
	FiChevronDown,
	FiChevronUp,
	FiShoppingBag,
} from "react-icons/fi";
import { useCartStore } from "@/app/hooks/use-cart-store";
import { Product } from "@/app/types";
import Button from "../ui/button";

interface IProductActionsProps {
	stock: number;
	product: Product;
}

const ProductActions = ({ stock, product }: IProductActionsProps) => {
	const { push } = useRouter();
	const [qty, setQty] = useState(1);
	const { addItem } = useCartStore();

	const checkout = () => {
		addItem(product);
		push("/checkout");
	};

	return (
		<div className="flex gap-5">
			<div className="border border-gray-500 inline-flex w-fit min-w-20.5">
				<div className="aspect-square text-xl font-medium border-r border-gray-500 flex justify-center items-center">
					<span>{qty}</span>
				</div>
				<div className="flex flex-col">
					<button
						onClick={() =>
							setQty((prevQty) => (stock > prevQty ? prevQty + 1 : qty))
						}
						className="border-b border-gray-500 h-1/2 cursor-pointer aspect-square flex items-center justify-center"
					>
						<FiChevronUp />
					</button>
					<button
						onClick={() =>
							setQty((prevQty) => (prevQty === 1 ? prevQty : prevQty - 1))
						}
						className="h-1/2 cursor-pointer aspect-square flex items-center justify-center"
					>
						<FiChevronDown />
					</button>
				</div>
			</div>
			<Button onClick={() => addItem(product, qty)} className="px-20 w-full">
				<FiShoppingBag size={24} /> Add to Cart
			</Button>
			<Button onClick={checkout} variant="dark" className="px-20 w-full">
				Checkout Now <FiArrowRight size={24} />
			</Button>
		</div>
	);
};

export default ProductActions;
