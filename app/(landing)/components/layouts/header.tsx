import Image from "next/image";
import Link from "next/link";
import { FiSearch, FiShoppingBag } from "react-icons/fi";

const Header = () => {
	return (
		<header>
			<div className="flex justify-between items-center gap-10 container mx-auto py-7">
				<Image
					src="/images/logo.svg"
					alt="SportOn Logo"
					width={127}
					height={30}
				/>

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

				<div className="flex gap-10">
					<FiSearch size={24} />
					<div className="relative">
						<FiShoppingBag size={24} />
						<div className="absolute bg-primary rounded-full w-3.5 h-3.5 text-white -top-1 -right-1 text-[10px] text-center">
							3
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
