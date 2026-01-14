"use client";

import Image from "next/image";
import Link from "next/link";
import { FiPlus } from "react-icons/fi";

import priceFormatter from "@/app/utils/price-formatter";
import { Product } from "@/app/types";
import { getImageUrl } from "@/app/lib/api";
import { useCartStore } from "@/app/hooks/use-cart-store";
import Button from "../ui/button";

interface IProductProps {
	products: Product[];
}

const ProductSection = ({ products }: IProductProps) => {
	const { addItem } = useCartStore();

	const handleAddToCart = (e: React.MouseEvent, product: Product) => {
		e.preventDefault();
		e.stopPropagation();
		addItem(product);
	};

	return (
		<section id="product-section" className="container mx-auto mt-32 mb-52">
			<h2 className="text-4xl font-bold text-center mb-11 italic">
				<span className="text-primary">OUR</span> PRODUCTS
			</h2>

			<div className="grid grid-cols-4 gap-5">
				{products.map((product, i) => (
					<Link
						key={i}
						href={`/product/${product._id}`}
						className="p-1.5 bg-white hover:drop-shadow-xl duration-300"
					>
						<div className="relative flex items-center justify-center bg-primary-light w-full aspect-square">
							<Image
								src={getImageUrl(product.imageUrl)}
								alt={product.name}
								width={300}
								height={300}
								className="aspect-square object-contain"
							/>

							<Button
								onClick={(e) => handleAddToCart(e, product)}
								className="size-10 absolute top-3 right-3 p-2!"
							>
								<FiPlus size={24} />
							</Button>
						</div>

						<h3 className="text-lg font-medium mt-4 mb-1.5">{product.name}</h3>

						<div className="flex justify-between mb-8">
							<div className="text-gray-500">{product.category.name}</div>
							<div className="font-medium text-primary">
								{priceFormatter(product.price)}
							</div>
						</div>
					</Link>
				))}
			</div>
		</section>
	);
};

export default ProductSection;
