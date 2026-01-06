import CategoriesSection from "./components/home/categories";
import HeroSection from "./components/home/hero";
import ProductSection from "./components/home/product";

export default function Home() {
	return (
		<main>
			<HeroSection />
			<CategoriesSection />
			<ProductSection />
		</main>
	);
}
