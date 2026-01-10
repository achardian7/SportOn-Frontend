import CartItems from "../components/checkout/cart-items";
import OrderInformation from "../components/checkout/order-information";

const Checkout = () => {
	return (
		<main className="min-h-[80vh] bg-gray-100">
			<div className="max-w-5xl mx-auto py-20">
				<h1 className="text-5xl font-bold text-center mb-10">Checkout Now</h1>

				<div className="grid grid-cols-2 gap-14">
					<OrderInformation />
					<CartItems />
				</div>
			</div>
		</main>
	);
};

export default Checkout;
