import Image from "next/image";

const OrderConfirmed = () => {
	return (
		<div className="bg-white w-160 p-16 mx-auto flex flex-col justify-center items-center">
			<div className="p-6 bg-green-200/40 rounded-full mb-4">
				<Image
					src="/images/checklist-icon.svg"
					alt="checklist"
					width={74}
					height={74}
				/>
			</div>
			<h2 className="text-2xl font-semibold mb-2">Order Confirmed !!</h2>
			<p className="text-center mb-8">
				We have received your payment, and your order is currently processed by
				our staff, just wait until your favorite sportswear arrive in your home.
				We will contact you in Whatsapp for further shipping updates.
			</p>
		</div>
	);
};

export default OrderConfirmed;
