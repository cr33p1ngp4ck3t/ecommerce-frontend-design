import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
	items: {
		image: string;
		name: string;
		price: string;
		feature?: string;
	}[];
	style: boolean;
}

export default function ProductCard({ items, style }: ProductCardProps) {
	return (
		<>
			{items.map((item, index) =>
				style ? (
					<Link
						href={"/products"}
						key={index}
						className="flex-col flex gap-2 bg-white items-start"
					>
						<div className="rounded-sm w-full bg-gray-100 py-2">
							<Image
								src={`${item.image}`}
								alt=""
								width={200}
								height={200}
								className="mx-auto mix-blend-multiply"
							/>
						</div>
						<div className="flex-col flex gap-2 bg-white items-start">
							<div className="text-lg font-bold">${item.price}</div>
							<div className="text-gray-600 text-sm w-3/5">{item.name}</div>
							<div className="text-blue-500 fill-blue-500 p-2 font-medium flex gap-2 border border-gray-200 rounded-sm w-fit">
								<ShoppingCart /> Move to Cart
							</div>
						</div>
					</Link>
				) : (
					<Link
						href={"/products"}
						key={index}
						className="p-2 flex-col flex gap-2 bg-white items-start justify-center text-start border border-gray-200 rounded-sm"
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
