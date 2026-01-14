import { getTransactionById } from "@/app/services/transaction.service";
import OrderConfirmed from "../../components/order-status/order-confirmed";
import OrderRejected from "../../components/order-status/order-rejected";
import OrderSubmitted from "../../components/order-status/order-submitted";

interface IOrderStatusProps {
	params: Promise<{
		id: string;
	}>;
}

const OrderStatus = async ({ params }: IOrderStatusProps) => {
	const { id } = await params;
	const transaction = await getTransactionById(id);

	return (
		<main className="bg-gray-100 min-h-[80vh] pt-20">
			<div className="max-w-5xl mx-auto py-20">
				<h1 className="text-center text-5xl font-bold mb-11">Order Status</h1>
				{transaction.status === "pending" && <OrderSubmitted />}
				{transaction.status === "paid" && <OrderConfirmed />}
				{transaction.status === "rejected" && <OrderRejected />}
			</div>
		</main>
	);
};

export default OrderStatus;
