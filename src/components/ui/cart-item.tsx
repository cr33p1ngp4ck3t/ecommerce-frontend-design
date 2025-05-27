import Image from "next/image";
import { Button } from "./button";
import { Combobox } from "./combobox";

const items = [
	{
		value: "Qty: 1",
		label: "Qty: 1",
	},
	{
		value: "Qty: 2",
		label: "Qty: 2",
	},
	{
		value: "Qty: 3",
		label: "Qty: 3",
	},
	{
		value: "Qty: 4",
		label: "Qty: 4",
	},
];

interface cartItemProps {
	img: string;
}

export default function CartItem({ img }: cartItemProps) {
	return (
		<div>
			<div className="bg-white">
				<div className="border-b border-b-gray-200 p-4 ">
					<div className="flex justify-between items-center">
						<div className="flex gap-2 items-start">
							<div className="rounded-sm px-1 border border-gray-200 bg-gray-100">
								<Image
									src={img}
									alt=""
									width={70}
									height={70}
									className="mix-blend-multiply"
								/>
							</div>
							<div className="flex flex-col justify-between items-start gap-2">
								<div className="font-medium ">
									T-shirts with multiple colors, for men and lady
								</div>
								<div className="text-gray-400">
									Size: medium, Color: blue, Material: Plastic <br /> Seller:
									Artel Market
								</div>
								<div className="flex gap-2">
									<Button className="text-red-500 hover:bg-white bg-white border border-gray-200 p-1 px-2">
										Remove
									</Button>
									<Button className="text-blue-500 hover:bg-white bg-white border border-gray-200 p-1 px-2">
										Save for Later
									</Button>
								</div>
							</div>
						</div>
						<div className="flex flex-col gap-3 text-end">
							<div className="font-medium">$54.00</div>
							<Combobox content={items} placeholder="Qty" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
