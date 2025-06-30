import { ArrowLeft, LockKeyhole, LucideTruck } from "lucide-react";
import { Button } from "./button";
import CartItem from "./cart-item";
import { Input } from "./input";
import Image from "next/image";

export default function Cart() {
	return (
		<div>
			<div className="md:w-[1200px] w-screen ">
				<div className="flex flex-col mt-2 gap-4 w-full ">
					<div className="flex flex-col md:grid md:grid-cols-4 gap-5">
						<div className="col-span-3 flex flex-col gap-4 relative ">
							<div className="flex flex-col gap-3 p-4 rounded-sm border bg-white border-gray-200">
								{[
									"/product/item.png",
									"/product/item-1.png",
									"/product/item-2.png",
								].map((image, index) => (
									<div key={index}>
										<CartItem img={image} />
									</div>
								))}
								<div className="flex justify-between items-center mt-2">
									<Button className="bg-blue-500 text-white px-2 p-1 flex gap-2 rounded-sm hover:bg-blue-600">
										<ArrowLeft />
										Back to Shop
									</Button>
									<Button className="bg-white text-blue-500 p-1 px-2 rounded-sm border border-gray-200 hover:bg-white">
										Remove all
									</Button>
								</div>
							</div>
							<div>
								<div>
									<div className="md:flex justify-between items-center my-4 hidden">
										<div className="flex gap-2">
											<div className="bg-gray-200 rounded-full p-4">
												<LockKeyhole className="fill-gray-400 text-white mix-blend-multiply  " />
											</div>
											<div className="flex flex-col items-start justify-center">
												<div>Secure Payment</div>
												<div className="text-gray-400">
													Have you ever finally just{" "}
												</div>
											</div>
										</div>
										<div className="flex gap-2">
											<div className="bg-gray-200 rounded-full p-4">
												<Image
													src={"/svgs/Vector-2.png"}
													alt=""
													width={20}
													height={20}
												/>
											</div>
											<div className="flex flex-col items-start justify-center">
												<div>Customer Support</div>
												<div className="text-gray-400">
													Have you ever finally just{" "}
												</div>
											</div>
										</div>
										<div className="flex gap-2">
											<div className="bg-gray-200 rounded-full p-4">
												<LucideTruck className="fill-gray-400 text-white mix-blend-multiply " />
											</div>
											<div className="flex flex-col items-start justify-center">
												<div>Free Delivery</div>
												<div className="text-gray-400">
													Have you ever finally just{" "}
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-span-1 flex flex-col  gap-4 sticky top-8 ">
							<div className="flex flex-col gap-2 p-4 bg-white border border-gray-200 rounded-sm">
								<div>
									<div>Have a coupon?</div>
								</div>
								<div className="flex">
									<Input
										placeholder="Add coupon"
										className="rounded-l-sm p-2 w-full rounded-r-none border-gray-200 bg-white"
									/>
									<Button className="w-fit bg-white text-blue-500 p-1 px-4 rounded-r-sm rounded-l-none border border-gray-200 hover:bg-white">
										Apply
									</Button>
								</div>
							</div>
							<div className="flex flex-col gap-2 p-4 bg-white border border-gray-200 rounded-sm">
								<div className="flex items-center justify-between">
									<div>Subtotal:</div>
									<div className="text-gray-600">$1403.97</div>
								</div>
								<div className="flex items-center justify-between ">
									<div>Discount:</div>
									<div className="text-red-500">- $60.00</div>
								</div>
								<div className="flex items-center justify-between ">
									<div>Tax:</div>
									<div className="text-green-700">+ $14.00</div>
								</div>
								<div className="h-[1px] w-full bg-gray-200 " />
								<div className="flex items-center font-medium justify-between">
									<div>Total:</div>
									<div className="text-lg ">+ $1357.97</div>
								</div>
								<div className="flex">
									<Button className="w-full bg-[#00B517] text-white py-6 text-lg rounded-sm border border-gray-200 hover:bg-white">
										Checkout
									</Button>
								</div>
								<div className="flex items-center justify-center gap-2">
									{[
										"payment.png",
										"payment-1.png",
										"payment-2.png",
										"payment-3.png",
										"payment-4.png",
									].map((img, index) => (
										<div className="flex  my-2" key={index}>
											<Image
												src={`/svgs/${img}`}
												alt=" "
												width={34}
												height={22}
											/>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
