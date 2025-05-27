import { cartProducts } from "@/components/data/product";
import { Button } from "@/components/ui/button";
import Cart from "@/components/ui/cart";
import ProductCard from "@/components/ui/productcard";
import Image from "next/image";

export default function CartPage() {
	return (
		<div>
			<div className="w-[1200px] mx-auto">
				<div className="flex flex-col mt-8 gap-4 w-full ">
					<div className="text-2xl font-bold">My Cart (3)</div>
					<Cart />
					<div className="flex flex-col border bg-white border-gray-200 rounded-sm p-4 gap-4">
						<div className="text-xl font-medium">Saved for later</div>
						<div className="grid grid-cols-4 gap-5">
							<ProductCard items={cartProducts} style={true} />
						</div>
					</div>
					<div>
						<div>
							<div className="relative w-[1200px]">
								<Image
									src={`/assets/Rectangle-cut.png`}
									alt=" "
									width={745}
									height={120}
									className="-z-10 absolute inset-0"
								/>
								<Image
									src={`/assets/Rectangle.png`}
									alt=" "
									width={1180}
									height={120}
									className="-z-20 absolute right-0"
								/>
								<div className="flex justify-between items-center my-8 p-8">
									<div className="flex flex-col ">
										<div className="text-white text-2xl font-medium">
											Super discount on more than 100 USD
										</div>
										<div className="text-white font-light">
											Have you ever finally just write dummy info
										</div>
									</div>
									<Button className="bg-orange-400 text-white hover:bg-orange-400 p-1 px-4 ">
										Shop Now
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
