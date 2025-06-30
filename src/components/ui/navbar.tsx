import { Menu } from "lucide-react";
import { Combobox } from "./combobox";

const help = [
	{
		value: "help1",
		label: "Help1",
	},
	{
		value: "help2",
		label: "Help2",
	},
	{
		value: "help3",
		label: "Help3",
	},
];

const currency = [
	{
		value: "currency1",
		label: "Currency1",
	},
	{
		value: "currency2",
		label: "Currency2",
	},
	{
		value: "currency3",
		label: "Currency3",
	},
];

const country = [
	{
		value: "country1",
		label: "Country1",
	},
	{
		value: "country2",
		label: "Country2",
	},
	{
		value: "country3",
		label: "Country3",
	},
];

export default function Navbar() {
	return (
		<div className="w-full border-y-2 border-gray-200 bg-white md:block hidden ">
			<div className="w-[1200px] mx-auto ">
				<div className=" h-fit py-4 font-semibold   ">
					<div className="flex items-center justify-between">
						<div className="flex gap-5 items-center justify-center">
							<div className="flex gap-1">
								<span className="cursor-pointer">
									<Menu />
								</span>
								All Category
							</div>
							<div>Hot Offers</div>
							<div>Gift Boxes</div>
							<div>Projects</div>
							<div>Menu Item</div>
							<Combobox content={help} placeholder="Help" />
						</div>
						<div className="flex gap-4 ">
							<Combobox content={currency} placeholder="Currency" />
							<Combobox content={country} placeholder="Country" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
