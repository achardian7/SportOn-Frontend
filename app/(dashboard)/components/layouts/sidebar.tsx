"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
	FiBox,
	FiCreditCard,
	FiLayers,
	FiLogOut,
	FiShoppingCart,
} from "react-icons/fi";

const Sidebar = () => {
	const menuItems = [
		{
			name: "Products",
			icon: FiBox,
			link: "/admin/products",
		},
		{
			name: "Categories",
			icon: FiLayers,
			link: "/admin/categories",
		},
		{
			name: "Transactions",
			icon: FiShoppingCart,
			link: "/admin/transactions",
		},
		{
			name: "Bank Information",
			icon: FiCreditCard,
			link: "/admin/bank-info",
		},
	];

	const pathname = usePathname();

	return (
		<aside className="w-80 min-screen bg-white border-r border-gray-100 flex flex-col fixed left-0 top-0 h-full">
			<div className="py-8 px-14 border-b border-gray-100">
				<Image
					src="/images/logo-admin.svg"
					alt="Logo"
					width={215}
					height={36}
				/>
			</div>

			<div className="flex flex-col gap-2 mt-12 p-5">
				{menuItems.map((item, i) => (
					<Link
						key={i}
						href={item.link}
						className={`flex gap-3 items-center py-2 px-4.5 rounded-lg font-medium duration-300 ${
							pathname === item.link
								? "bg-primary/15 text-primary"
								: "bg-transparent hover:bg-gray-100"
						}`}
					>
						<item.icon />
						<span>{item.name}</span>
					</Link>
				))}
			</div>
			<Link
				href="#"
				className="flex gap-3 font-medium py-3 px-4.5 mx-5 mb-10 mt-auto hover:bg-gray-100 rounded-lg duration-300"
			>
				<FiLogOut size={24} /> Log Out
			</Link>
		</aside>
	);
};

export default Sidebar;
