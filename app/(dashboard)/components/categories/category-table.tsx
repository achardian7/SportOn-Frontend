import Image from "next/image";
import { FiEdit2, FiTrash } from "react-icons/fi";

const categoryData = [
	{
		name: "Running",
		imageUrl: "/images/categories/category-running.svg",
		description: "lorem ipsum ",
	},
	{
		name: "Football",
		imageUrl: "/images/categories/category-football.svg",
		description: "lorem ipsum ",
	},
];

const CategoryTable = () => {
	return (
		<div className="bg-white rounded-xl border border-gray-200">
			<table className="w-full text-left border-collapse">
				<thead>
					<tr className="border-b border-gray-200">
						<th className="px-6 py-4 font-semibold">Category Name</th>
						<th className="px-6 py-4 font-semibold">Description</th>
						<th className="px-6 py-4 font-semibold">Actions</th>
					</tr>
				</thead>

				<tbody>
					{categoryData.map((category, i) => (
						<tr key={i} className="border-b border-gray-200">
							<td className="px-6 py-4 font-medium">
								<div className="flex gap-2 items-center">
									<div className="aspect-square bg-gray-100 rounded-md">
										<Image
											src={category.imageUrl}
											alt={category.name}
											width={52}
											height={52}
											className="aspect-square object-contain"
										/>
									</div>
									<span>{category.name}</span>
								</div>
							</td>
							<td className="px-6 py-4 font-medium">{category.description}</td>
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

export default CategoryTable;
