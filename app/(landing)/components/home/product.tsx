import Image from "next/image";
import Link from "next/link";
import { FiPlus } from "react-icons/fi";

import Button from "../ui/button";

const products = [
	{
		name: "SportsOn Product 1",
		category: "Running",
		price: 450000,
		imgUrl: "product-1.png",
	},
	{
		name: "SportsOn Product 2",
		category: "Tennis",
		price: 250000,
		imgUrl: "product-2.png",
	},
	{
		name: "SportsOn Product 3",
		category: "Running",
		price: 230000,
		imgUrl: "product-3.png",
	},
	{
		name: "SportsOn Product 4",
		category: "Football",
		price: 440000,
		imgUrl: "product-4.png",
	},
	{
		name: "SportsOn Product 5",
		category: "Running",
		price: 550000,
		imgUrl: "product-5.png",
	},
	{
		name: "SportsOn Product 6",
		category: "Basketball",
		price: 650000,
		imgUrl: "product-6.png",
	},
];

const ProductSection = () => {
	return (
		<section id="product-section" className="container mx-auto mt-32">
			<h2 className="text-4xl font-bold text-center mb-11 italic">
				<span className="text-primary">OUR</span> PRODUCTS
			</h2>

			<div className="grid grid-cols-4 gap-5">
				{products.map((product, i) => (
					<Link
						key={i}
						href="#"
						className="p-1.5 bg-white hover:drop-shadow-xl duration-300"
					>
						<div className="relative flex items-center justify-center bg-primary-light w-full aspect-square">
							<Image
								src={`/images/products/${product.imgUrl}`}
								alt={product.name}
								width={300}
								height={300}
								className="aspect-square object-contain"
							/>

							<Button className="size-10 absolute top-3 right-3 p-2!">
								<FiPlus size={24} />
							</Button>
						</div>

						<h3 className="text-lg font-medium mt-4 mb-1.5">{product.name}</h3>

						<div className="flex justify-between mb-8">
							<div className="text-gray-500">{product.category}</div>
							<div className="font-medium text-primary">
								{Intl.NumberFormat("id-Id", {
									style: "currency",
									currency: "IDR",
									maximumSignificantDigits: 3,
								}).format(product.price)}
							</div>
						</div>
					</Link>
				))}
			</div>
		</section>
	);
};

export default ProductSection;
