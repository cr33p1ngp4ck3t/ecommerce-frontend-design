import Image from "next/image";
import { Button } from "./button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ProductProps {
	content: {
		banner: string;
		title: string;
		item: {
			image: string;
			name: string;
			price: string;
		}[];
	};
}

export default function ShowCase({ content }: ProductProps) {
	return (
		<div>
			<div className="mx-auto md:w-[1200px] w-screen bg-white border-gray-200 md:border border-b md:rounded-sm md:h-[260px] overflow-x-auto no-scrollbar">
				<div className="flex flex-col h-full md:flex-row flex-nowrap snap-x snap-mandatory">
					<div
						className="md:flex flex-col gap-4 border-r border-gray-200 h-full p-4 w-[280px] font-semibold hidden"
						style={{ backgroundImage: `url(/assets/${content.banner})` }}
					>
						<div className="text-xl w-1/2">{content.title}</div>
						<div className="flex gap-2">
							<Button className="bg-white text-black hover:bg-white">
								Source Now
							</Button>
						</div>
					</div>
					<div className="text-xl md:hidden font-semibold truncate p-2">
						{content.title}
					</div>

					<div className="md:grid grid-cols-4 grid-rows-2 flex md:flex-none flex-nowrap overflow-x-auto no-scrollbar snap-x snap-mandatory">
						{" "}
						{content.item.map((item, index) => (
							<Link
								href={"/products"}
								className="flex md:flex-col flex-col-reverse gap-1 border border-gray-200 h-full py-2 px-4 md:px-6 justify-center w-[140px] md:w-[230px] shrink-0 snap-center"
								key={index}
							>
								<div className="md:hidden block text-gray-400 text-sm">
									From USD {item.price}
								</div>
								<div className="capitalize truncate ">{item.name}</div>
								<div className="flex justify-between text-gray-400 text-sm">
									<div className="md:block hidden">
										From
										<br />
										USD {item.price}
									</div>
									<Image
										src={item.image}
										alt=" "
										width={82}
										height={82}
										className="md:w-[82px] md:h-[82px] w-[98px] h-[98px]"
									/>
								</div>
							</Link>
						))}
					</div>
					<div className="flex gap-2 my-2 md:hidden p-2">
						<Button className="bg-white text-blue-500 hover:bg-blue-400 ">
							Source Now <ArrowRight />
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
