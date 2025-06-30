import Image from "next/image";
import { Items } from "../data/product";

export default function Deals() {
	return (
		<div>
			<div className="mx-auto md:w-[1200px] w-screen bg-white border-gray-200 md:border border-b md:rounded-sm md:h-[240px] ">
				<div className="flex h-full md:flex-row flex-col ">
					<div className="flex md:flex-col gap-4 border-r border-gray-200 h-full p-4 justify-between md:justify-normal">
						<div className=" flex flex-col">
							<div className="text-xl font-semibold">Deals and offers</div>
							<div className="text-gray-400 hidden md:block">Hygiene Equipments</div>
						</div>
						<div className="flex gap-2">
							<div className="md:flex flex-col p-2 bg-[#606060]  text-sm text-white rounded-sm w-[50px] hidden ">
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
					<div className="md:grid md:grid-cols-5 md:overflow-x-hidden flex w-full overflow-x-auto snap-x snap-mandatory">
						{Items.map((item, index) => (
							<div
								className="flex flex-col gap-4 border border-gray-200 h-full py-2 md:px-6 px-2 items-center justify-between text-center md:w-full w-[140px] shrink-0 snap-center"
								key={index}
							>
								<Image
									src={item.image}
									alt=" "
									width={300}
									height={300}
									className="md:w-[142px] md:h-[142px] w-[95px] h-[95px]  "
								/>
								<div className="flex flex-col gap-2 items-center justify-between">
									<div className="text-sm md:text-base md:flex-none flex-1">
										{item.name}
									</div>
									<div className="w-[60px] bg-[#FFE3E3] text-[#EB001B] p-auto py-1 text-sm rounded-full">
										-{item.discount}
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
