"use client";
import Image from "next/image";
import Link from "next/link";
import { Input } from "./input";
import { Button } from "./button";
import { usePathname } from "next/navigation";

export default function Header() {
	const pathname = usePathname();
	return (
		<header className="w-full  text-gray-600 body-font bg-white">
			<div className=" mx-auto max-w-[1200px] flex p-5 items-center gap-5 justify-between">
				<Link
					href={"/"}
					className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
				>
					<Image src={"/assets/logo-colored.png"} alt="" width={150} height={46} />
				</Link>
				{pathname != "/cart" ? (
					<div className="flex w-full max-w-lg items-center">
						<Input type="email" placeholder="Email" className="rounded-r-none border" />
						<select className="border border-l-0 border-blue-500 py-1 px-2 h-9">
							<option value="">All Category</option>
							<option value="option1">Option 1</option>
							<option value="option2">Option 2</option>
						</select>
						<Button type="submit" className="rounded-l-none bg-blue-500 ">
							Subscribe
						</Button>
					</div>
				) : (
					<div className="hidden"></div>
				)}
				<nav className=" flex gap-3 items-center text-base justify-center">
					<Link
						href={"#"}
						className="text-gray-500 flex flex-col gap-1 place-items-center"
					>
						<Image src={"/svgs/Vector-3.png"} alt="" width={20} height={20} />
						<div>Profile</div>
					</Link>
					<Link
						href={"#"}
						className="text-gray-500 flex flex-col gap-1 place-items-center "
					>
						<Image src={"/svgs/Vector-2.png"} alt="" width={20} height={20} />
						<div>Message</div>
					</Link>
					<Link
						href={"#"}
						className="text-gray-500 flex flex-col gap-1 place-items-center "
					>
						<Image src={"/svgs/Vector-1.png"} alt="" width={20} height={20} />
						<div>Orders</div>
					</Link>
					<Link
						href={"/cart"}
						className="text-gray-500 flex flex-col gap-1 place-items-center "
					>
						<Image src={"/svgs/Vector.png"} alt="" width={20} height={20} />
						<div>My Cart</div>
					</Link>
				</nav>
			</div>
		</header>
	);
}
