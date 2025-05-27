import Image from "next/image";
import { Button } from "./button";
import Navbar from "./navbar";

export default function Hero() {
	return (
		<div className="flex w-full items-center justify-center flex-col gap-5 ">
			<div className="w-full mt-2">
				<Navbar />
			</div>
			<div className="mx-auto w-[1200px] bg-white border-gray-200 border rounded-sm ">
				<div className="flex gap-2 p-4">
					<div className="flex gap-1 flex-col flex-1">
						<Button className="button-style">Automobiles</Button>
						<Button className="button-style">Clothes Wear</Button>
						<Button className="button-style">Home Interior</Button>
						<Button className="button-style">Computer and Tech</Button>
						<Button className="button-style">Tools and Equipment</Button>
						<Button className="button-style">Sports and Outdoor</Button>
						<Button className="button-style">Animals and Pets</Button>
						<Button className="button-style">Machinery Tools</Button>
						<Button className="button-style">Other Categories</Button>
					</div>
					<div>
						<Image src={"/assets/banner-hero.png"} alt="" width={665} height={360} />
					</div>
					<div className="flex gap-1 flex-col w-[200px] ">
						<div className="p-4 bg-blue-100 flex flex-col gap-2 rounded-md">
							<div className="flex gap-1 items-center justify-center ">
								<Image src={"/svgs/Avatar.png"} alt="" width={44} height={44} />
								<div className="text-base">
									Hi, user
									<br /> let{`’`}s get started
								</div>
							</div>
							<div className="flex gap-2 flex-col">
								<Button className="bg-blue-600 text-white hover:bg-blue-600">
									Join Now{" "}
								</Button>
								<Button className="bg-white text-blue-600 hover:bg-white">
									Log In
								</Button>
							</div>
						</div>
						<div className="bg-orange-400 text-white text-base p-4 text-wrap rounded-md">
							Get US $10 off
							<br />
							with a new
							<br />
							supplier
						</div>
						<div className="bg-teal-500 text-white text-base p-4 text-wrap rounded-md">
							Send quotes with
							<br />
							supplier preferences
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
