import Image from "next/image";
import { Items } from "../data/product";

export default function Deals() {
	return (
		<div>
			<div className="mx-auto w-[1200px] bg-white border-gray-200 border rounded-sm h-[240px] ">
				<div className="flex h-full">
					<div className="flex flex-col gap-4 border-r border-gray-200 h-full p-4">
						<div className=" flex flex-col">
							<div className="text-xl font-semibold">Deals and offers</div>
							<div className="text-gray-400">Hygiene Equipments</div>
						</div>
						<div className="flex gap-2">
							<div className="flex flex-col p-2 bg-[#606060]  text-sm text-white rounded-sm w-[50px]  ">
								<div className="font-bold">04</div>
								<div>Days</div>
							</div>
							<div className="flex flex-col p-2 bg-[#606060]  text-sm text-white rounded-sm w-[50px]  ">
								<div className="font-bold">13</div>
								<div>Hour</div>
							</div>
							<div className="flex flex-col p-2 bg-[#606060]  text-sm text-white rounded-sm w-[50px]  ">
								<div className="font-bold">34</div>
								<div>Min</div>
							</div>
							<div className="flex flex-col p-2 bg-[#606060]  text-sm text-white rounded-sm w-[50px]  ">
								<div className="font-bold">56</div>
								<div>sec</div>
							</div>
						</div>
					</div>
					<div className="grid grid-cols-5">
						{Items.map((item, index) => (
							<div
								className="flex flex-col gap-4 border-r border-gray-200 h-full py-2 px-6 items-center justify-center text-center w-full"
								key={index}
							>
								<Image src={item.image} alt=" " width={140} height={140} />
								<div className="flex flex-col gap-2 items-center justify-center">
									<div className="">{item.name}</div>
									<div className="w-[60px] bg-[#FFE3E3] text-[#EB001B] p-auto py-1 text-sm rounded-full">
										{item.discount}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
