import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
	items: {
		image: string;
		name: string;
		price?: string;
		feature?: string;
	}[];
	style: boolean;
	style2?: boolean;
}

export default function ProductCard({ items, style, style2 = false }: ProductCardProps) {
	return (
		<>
			{items.map((item, index) =>
				style ? (
					<Link
						href={"/products"}
						key={index}
						className="md:flex-col flex-row flex  gap-5 md:gap-2 bg-white items-start shrink-0 snap-center"
					>
						<div className="rounded-sm md:w-full bg-gray-100 py-2">
							<Image
								src={`${item.image}`}
								alt=""
								width={200}
								height={200}
								className=" mix-blend-multiply md:w-[200px] md:h-[200px] w-[100px] h-[100px] "
							/>
						</div>
						<div className="flex-col flex gap-2 bg-white items-start">
							<div className="text-lg font-bold">${item.price}</div>
							<div className="text-gray-600 text-sm md:w-3/5">{item.name}</div>
							<div className="text-blue-500 fill-blue-500 p-2 font-medium flex gap-2 border border-gray-200 rounded-sm w-fit">
								<ShoppingCart /> Move to Cart
							</div>
						</div>
					</Link>
				) : style2 ? (
					<Link
						href={"/products"}
						key={index}
						className="p-2 flex-col flex gap-2 bg-white items-start justify-center text-start rounded-sm shrink-0 snap-center"
					>
						<div className="bg-gray-100 rounded-sm">
							<Image
								src={`${item.image}`}
								alt=""
								width={200}
								height={200}
								className="mix-blend-multiply"
							/>
						</div>
						<div className="flex flex-col gap-2 bg-white">
							<div className="w-3/4">{item.name}</div>
							<div className="text-gray-400 ">$32.00 - $40.00</div>
						</div>
					</Link>
				) : (
					<Link
						href={"/products"}
						key={index}
						className="p-2 flex-col flex gap-2 bg-white items-start justify-center text-start border border-gray-200 rounded-sm shrink-0 snap-center"
					>
						<Image src={`${item.image}`} alt="" width={200} height={200} className="" />
						<div className="font-semibold">${item.price}</div>
						<div className="text-gray-400 flex-1">{item.name}</div>
					</Link>
				)
			)}
		</>
	);
}
