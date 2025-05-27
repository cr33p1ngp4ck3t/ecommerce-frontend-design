import Image from "next/image";
import { Button } from "./button";
import Link from "next/link";

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
			<div className="mx-auto w-[1200px] bg-white border-gray-200 border rounded-sm h-[260px] ">
				<div className="flex h-full">
					<div
						className="flex flex-col gap-4 border-r border-gray-200 h-full p-4 w-[280px] font-semibold "
						style={{ backgroundImage: `url(/assets/${content.banner})` }}
					>
						<div className="text-xl w-1/2">{content.title}</div>
						<div className="flex gap-2">
							<Button className="bg-white text-black hover:bg-white">
								Source Now
							</Button>
						</div>
					</div>
					<div className="grid grid-cols-4 grid-rows-2">
						{content.item.map((item, index) => (
							<Link
								href={"/products"}
								className="flex flex-col gap-1 border-r border-b border-gray-200 h-full py-2 px-6  justify-center  w-[230px] "
								key={index}
							>
								<div className="capitalize">{item.name}</div>
								<div className="flex justify-between text-gray-400 text-sm">
									<div>
										From
										<br />
										USD {item.price}
									</div>
									<Image src={item.image} alt=" " width={82} height={82} />
								</div>
							</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
