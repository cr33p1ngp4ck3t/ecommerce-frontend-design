import Deals from "@/components/ui/deals";
import Hero from "@/components/ui/hero";
import { content1, content2 } from "@/components/data/product";
import ShowCase from "@/components/ui/showcase";
import CTA from "@/components/ui/cta";
import Recommend from "@/components/ui/recommended";
import Services from "@/components/ui/extraservice";
import { region } from "@/components/data/info";
import Image from "next/image";
import Newsletter from "@/components/ui/newsletter";

export default function Home() {
	return (
		<div className="flex flex-col gap-5 items-center justify-center">
			<Hero />
			<Deals />
			<ShowCase content={content1} />
			<ShowCase content={content2} />
			<CTA />
			<Recommend />
			<Services />

			{/* supplier region */}
			<div className="w-[1200px] ">
				<div className="flex flex-col mt-4 gap-4 w-full ">
					<div className="text-2xl font-semibold">Suppliers by Region</div>
					<div className="grid grid-cols-5 w-full gap-2">
						{region.map((rg, index) => (
							<div key={index} className="flex gap-2 items-center ">
								<Image src={rg.image} alt="" width={28} height={20} />
								<div className="flex flex-col">
									<div className="">{rg.name}</div>
									<div className="text-gray-400 text-sm">{rg.sname}</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			<Newsletter />
		</div>
	);
}

