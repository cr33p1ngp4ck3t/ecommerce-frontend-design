import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
	items: {
		image: string;
		oldprice?: boolean;
	}[];
	grid: boolean;
}

export default function ProductCardStyle({ items, grid }: ProductCardProps) {
	return (
		<>
			{items.map((item, index) =>
				grid ? (
					<Link
						href={"/products/product"}
						key={index}
						className="p-4 flex-col flex gap-2 bg-white items-center justify-between border border-gray-200 rounded-sm"
					>
						<Image
							src={`/product/${item.image}`}
							alt=""
							width={200}
							height={200}
							className=""
						/>
						<div className="flex gap-2 border-t border-gray-200 pt-4">
							<div className="flex flex-col gap-2">
								<div className="font-bold text-lg">$99.50</div>{" "}
								{item.oldprice ? (
									<span className="text-gray-400 line-through">$1128.00</span>
								) : (
									<div className="hidden"></div>
								)}
								<div className="flex items-center justify-start">
									{[...Array(4)].map((_, starIndex) => (
										<Image
											key={starIndex}
											src={`/assets/star-filled.png`}
											alt="Star"
											width={18}
											height={18}
										/>
									))}
									{[...Array(1)].map((_, emptyIndex) => (
										<Image
											key={emptyIndex}
											src={`/assets/star-empty.png`}
											alt="Star"
											width={18}
											height={18}
										/>
									))}{" "}
									<div className="ml-2 text-amber-400">7.5</div>
								</div>
								<div className="text-gray-700 flex-1 w-4/5">
									GoPro HERO6 4K Action Camera - Black
								</div>
							</div>
							<Image
								src={"/assets/favorite.png"}
								alt=" "
								width={24}
								height={24}
								className="p-2 border border-gray-200 w-10 h-10 rounded-sm "
							/>
						</div>
					</Link>
				) : (
					<Link
						href={"/products/product"}
						key={index}
						className="flex gap-5 items-start justify-center bg-white p-4 border border-gray-200 rounded-sm"
					>
						<Image src={`/product/${item.image}`} alt="" width={200} height={200} />
						<div className="flex flex-col gap-2">
							<div className="font-medium">GoPro HERO6 4K Action Camera - Black</div>
							<div className="flex gap-2 items-center justify-start">
								<div className="font-bold text-lg">$998.00</div>
								{item.oldprice ? (
									<div className="text-gray-400 line-through">$1128.00</div>
								) : (
									<div></div>
								)}
							</div>
							<div className="flex gap-2 items-center">
								<div className="flex ">
									{[...Array(4)].map((_, starIndex) => (
										<Image
											key={starIndex}
											src={`/assets/star-filled.png`}
											alt="Star"
											width={18}
											height={18}
										/>
									))}
									{[...Array(1)].map((_, emptyIndex) => (
										<Image
											key={emptyIndex}
											src={`/assets/star-empty.png`}
											alt="Star"
											width={18}
											height={18}
										/>
									))}
								</div>
								<div className="text-gray-400"> 154 orders</div>
								<div className="text-green-600"> Free Shipping</div>
							</div>
							<div className="text-gray-700">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua
							</div>
							<div className="text-blue-500 font-medium cursor-pointer ">
								View Details
							</div>
						</div>
						<Image
							src={"/assets/favorite.png"}
							alt=" "
							width={24}
							height={24}
							className="p-2 border border-gray-200 w-10 h-10 rounded-sm "
						/>
					</Link>
				)
			)}
		</>
	);
}
