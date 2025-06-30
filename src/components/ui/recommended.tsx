import { productcard } from "../data/product";
import ProductCard from "./productcard";

export default function Recommend() {
	return (
		<div>
			<div className="md:max-w-[1200px] w-screen  ">
				<div className="flex flex-col">
					<div className="font-semibold text-2xl p-2">Recommended items</div>
					<div className="grid grid-cols-2 md:grid-cols-5 gap-4 my-4 p-2">
						<ProductCard items={productcard.item} style={false} />
					</div>
				</div>
			</div>
		</div>
	);
}
