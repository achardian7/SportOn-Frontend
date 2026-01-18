import Image from "next/image";
import { FiEdit2, FiTrash } from "react-icons/fi";

import priceFormatter from "@/app/utils/price-formatter";

const productData = [
	{
		name: "SportOn Product 1",
		imageUrl: "/images/products/product-1.png",
		category: "Basketball",
		price: 200000,
		stock: 24,
	},
	{
		name: "SportOn Product 2",
		imageUrl: "/images/products/product-2.png",
		category: "Running",
		price: 230000,
		stock: 20,
	},
	{
		name: "SportOn Product 3",
		imageUrl: "/images/products/product-3.png",
		category: "Basketball",
		price: 500000,
		stock: 6,
	},
];

const ProductTable = () => {
	return (
		<div className="bg-white rounded-xl border border-gray-200">
			<table className="w-full text-left border-collapse">
				<thead>
					<tr className="border-b border-gray-200">
						<th className="px-6 py-4 font-semibold">Product</th>
						<th className="px-6 py-4 font-semibold">Category</th>
						<th className="px-6 py-4 font-semibold">Price</th>
						<th className="px-6 py-4 font-semibold">Stock</th>
						<th className="px-6 py-4 font-semibold">Actions</th>
					</tr>
				</thead>

				<tbody>
					{productData.map((product, i) => (
						<tr key={i} className="border-b border-gray-200">
							<td className="px-6 py-4 font-medium">
								<div className="flex gap-2 items-center">
									<div className="aspect-square bg-gray-100 rounded-md">
										<Image
											src={product.imageUrl}
											alt={product.name}
											width={52}
											height={52}
											className="aspect-square object-contain"
										/>
									</div>
									<span>{product.name}</span>
								</div>
							</td>
							<td className="px-6 py-4 font-medium">
								<div className="px-2 py-1 w-fit bg-gray-200 rounded-md">
									{product.category}
								</div>
							</td>
							<td className="px-6 py-4 font-medium">
								{priceFormatter(product.price)}
							</td>
							<td className="px-6 py-4 font-medium">{product.stock} units</td>
							<td className="px-6 py-7.5 flex items-center gap-3 text-gray-600">
								<button>
									<FiEdit2 size={20} />
								</button>
								<button>
									<FiTrash size={20} />
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default ProductTable;
