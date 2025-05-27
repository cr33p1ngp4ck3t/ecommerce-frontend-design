import { productcard } from "../data/product";
import ProductCard from "./productcard";

export default function Recommend() {
	return (
		<div>
			<div className="max-w-[1200px]  ">
				<div className="flex flex-col">
					<div className="font-semibold text-2xl">Recommended items</div>
					<div className="grid grid-cols-5 gap-4 my-4">
						<ProductCard items={productcard.item} style={false} />
					</div>
				</div>
			</div>
		</div>
	);
}
