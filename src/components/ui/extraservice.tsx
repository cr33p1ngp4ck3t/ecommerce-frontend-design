import Image from "next/image";

const serv = [
	{
		image: "/assets/serv3.png",
		name: "Source from Industry Hubs",
		svg: "/svgs/search.png",
	},
	{
		image: "/assets/serv4.png",
		name: "Customize Your Products",
		svg: "/svgs/inventory_2.png",
	},
	{
		image: "/assets/serv2.png",
		name: "Fast, reliable shipping by ocean or air",
		svg: "/svgs/send.png",
	},
	{
		image: "/assets/serv1.png",
		name: "Product monitoring and inspection",
		svg: "/svgs/security.png",
	},
];

export default function Services() {
	return (
		<div>
			<div className="w-[1200px]  ">
				<div className="flex flex-col mt-4">
					<div className="text-2xl font-semibold">Our Extra Services</div>
					<div className="grid grid-cols-4 gap-4 my-4">
						{serv.map((s, index) => (
							<div
								key={index}
								className=" flex-col flex items-start gap-2 text-start border border-gray-200 rounded-sm w-[280px] bg-white"
							>
								<div className="relative ">
									<Image
										src={`${s.image}`}
										alt=""
										width={280}
										height={120}
										className="bg-black/60 rounded-sm"
									/>
									<div className="absolute p-4 -bottom-7 right-[5%] bg-[#D1E7FF] rounded-full border border-white">
										<Image
											src={`${s.svg}`}
											alt=""
											width={24}
											height={24}
											className=""
										/>
									</div>
								</div>
								<div className="flex-1 ">
									<div className="w-3/4 font-semibold p-4">{s.name}</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
