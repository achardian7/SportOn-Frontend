"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiSearch, FiShoppingBag } from "react-icons/fi";

import { useCartStore } from "@/app/hooks/use-cart-store";
import CartPopup from "../ui/cart-popup";

const Header = () => {
	const [isCartPopupOpen, setIsCartPopupOpen] = useState(false);
	const { items } = useCartStore();

	return (
		<header className="fixed top-0 left-0 w-full z-20 bg-white/50 backdrop-blur-xl">
			<div className="flex justify-between items-center gap-10 container mx-auto py-7">
				<Link href="/">
					<Image
						src="/images/logo.svg"
						alt="SportOn Logo"
						width={127}
						height={30}
					/>
				</Link>

				<nav className="flex gap-44 font-medium">
					<Link
						href="#"
						className="relative after:content-[''] after:block after:h-0.75 after:w-2/3 after:absolute after:left-1/2 after:-translate-x-1/2 after:translate-y-1 after:bg-primary"
					>
						Home
					</Link>
					<Link href="#">Category</Link>
					<Link href="#">Explore Products</Link>
				</nav>

				<div className="relative flex gap-10">
					<FiSearch size={24} />
					<button
						onClick={() => setIsCartPopupOpen((prevState) => !prevState)}
						className="relative cursor-pointer"
					>
						<FiShoppingBag size={24} />
						{items.length > 0 && (
							<div className="absolute bg-primary rounded-full w-3.5 h-3.5 text-white -top-1 -right-1 text-[10px] text-center">
								{items.length}
							</div>
						)}
					</button>

					{isCartPopupOpen && <CartPopup />}
				</div>
			</div>
		</header>
	);
};

export default Header;
