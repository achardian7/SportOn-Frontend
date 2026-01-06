import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const categories = [
	{
		name: "Running",
		imgUrl: "category-running.svg",
	},
	{
		name: "Tennis",
		imgUrl: "category-tennis.svg",
	},
	{
		name: "Basketball",
		imgUrl: "category-basketball.svg",
	},
	{
		name: "Football",
		imgUrl: "category-football.svg",
	},
	{
		name: "Badminton",
		imgUrl: "category-badminton.svg",
	},
	{
		name: "Swimming",
		imgUrl: "category-swimming.svg",
	},
];

const CategoriesSection = () => {
	return (
		<section id="categories-section" className="container mx-auto">
			<div className="flex justify-between">
				<h2 className="font-bold text-2xl">Browse By Categories</h2>

				<Link
					href="/"
					className="flex items-center gap-2 text-primary font-medium"
				>
					<span>See All Categories</span>
					<FiArrowRight />
				</Link>
			</div>

			<div className="grid grid-cols-6 gap-12 mt-8">
				{categories.map((category, i) => (
					<div
						key={i}
						className="flex justify-center w-full aspect-square rounded-lg bg-linear-to-r from-[#f1f1f1] to-[#f7f7f7]"
					>
						<div className="self-center space-y-2.5">
							<Image
								src={`/images/categories/${category.imgUrl}`}
								alt={`${category.name} image`}
								width={86}
								height={86}
							/>
							<div className="text-center text-primary font-medium text-xl">
								{category.name}
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default CategoriesSection;
