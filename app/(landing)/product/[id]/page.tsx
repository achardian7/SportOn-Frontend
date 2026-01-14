import Image from "next/image";

import priceFormatter from "@/app/utils/price-formatter";
import { getProductDetail } from "@/app/services/product.service";
import { getImageUrl } from "@/app/lib/api";
import ProductActions from "../../components/product-detail/product-actions";

interface IProductDetailProps {
	params: Promise<{ id: string }>;
}

const ProductDetail = async ({ params }: IProductDetailProps) => {
	const { id } = await params;

	const product = await getProductDetail(id);

	return (
		<main className="container mx-auto py-40 flex gap-12">
			<div className="bg-primary-light min-w-140 aspect-square flex items-center justify-center">
				<Image
					src={getImageUrl(product.imageUrl)}
					alt={product.name}
					width={550}
					height={550}
					className="aspect-square object-contain w-full"
				/>
			</div>

			<div className="w-full py-7">
				<h1 className="text-5xl font-bold mb-6">{product.name}</h1>
				<div className="py-2 px-6 bg-primary-light text-primary w-fit rounded-full mb-5">
					{product.category.name}
				</div>
				<p className="leading-loose mb-8">{product.description}</p>
				<div className="text-primary text-[32px] font-semibold mb-12">
					{priceFormatter(product.price)}
				</div>
				<ProductActions product={product} stock={product.stock} />
			</div>
		</main>
	);
};

export default ProductDetail;
