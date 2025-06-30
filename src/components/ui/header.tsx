"use client";
import Image from "next/image";
import Link from "next/link";
import { Input } from "./input";
import { Button } from "./button";
import { usePathname } from "next/navigation";
import { ArrowLeft, Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Menubar from "./menu";

function useIsMobile(breakpoint = 768) {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const check = () => setIsMobile(window.innerWidth < breakpoint);
		check();
		window.addEventListener("resize", check);
		return () => window.removeEventListener("resize", check);
	}, [breakpoint]);

	return isMobile;
}
interface StyleProps {
	style: boolean;
	title?: string;
	search: boolean;
}

export default function Header({ style, search, title = "" }: StyleProps) {
	const router = useRouter();
	const pathname = usePathname();
	const isMobile = useIsMobile();

	const showSearchBar = isMobile ? search : pathname !== "/cart";
	const showLeftIcon = style || !isMobile;
	const [menu, setMenu] = useState(false);

	const handleMenu = () => {
		setMenu((prev) => !prev);
	};

	return (
		<header className="w-full text-gray-600 body-font bg-white">
			<div className="mx-auto max-w-[1200px] flex flex-col p-5 items-center gap-3">
				<div className="flex items-center w-full justify-between">
					{showLeftIcon ? (
						<div className="flex gap-4 items-center">
							<span className="cursor-pointer md:hidden">
								<Menu onClick={handleMenu} />
								{menu && (
									<div className="relative">
										<X
											onClick={handleMenu}
											className="fixed top-5 right-1/6 z-20"
										/>
										<Menubar />
									</div>
								)}
							</span>
							<Link href="/">
								<Image
									src={"/assets/logo-colored.png"}
									alt=""
									width={150}
									height={46}
								/>
							</Link>
						</div>
					) : (
						<div className="flex gap-4 items-center justify-start">
							<span className="cursor-pointer md:hidden">
								<ArrowLeft onClick={() => router.back()} />
							</span>
							<div className="text-xl font-bold">{title}</div>
						</div>
					)}

					{!isMobile && pathname !== "/cart" && (
						<div className="md:flex w-full max-w-lg items-center hidden">
							<Input
								type="email"
								placeholder="Email"
								className="rounded-r-none border"
							/>
							<select className="border border-l-0 border-blue-500 py-1 px-2 h-9">
								<option value="">All Category</option>
								<option value="option1">Option 1</option>
								<option value="option2">Option 2</option>
							</select>
							<Button type="submit" className="rounded-l-none bg-blue-500">
								Subscribe
							</Button>
						</div>
					)}

					<nav className=" flex gap-3 items-center text-base justify-center">
						<Link
							href={"#"}
							className="text-gray-500 flex flex-col gap-1 place-items-center"
						>
							<Image src={"/svgs/Vector-3.png"} alt="" width={20} height={20} />
							<div className="hidden md:block">Profile</div>
						</Link>
						<Link
							href={"#"}
							className="text-gray-500 md:flex flex-col gap-1 place-items-center hidden"
						>
							<Image src={"/svgs/Vector-2.png"} alt="" width={20} height={20} />
							<div className="hidden md:block">Message</div>
						</Link>
						<Link
							href={"#"}
							className="text-gray-500 md:flex flex-col gap-1 place-items-center hidden"
						>
							<Image src={"/svgs/Vector-1.png"} alt="" width={20} height={20} />
							<div className="hidden md:block">Orders</div>
						</Link>
						<Link
							href={"/cart"}
							className="text-gray-500 flex flex-col gap-1 place-items-center "
						>
							<Image src={"/svgs/Vector.png"} alt="" width={20} height={20} />
							<div className="hidden md:block">My Cart</div>
						</Link>
					</nav>
				</div>

				{showSearchBar && (
					<div className="w-full md:hidden sm:block">
						<Input
							placeholder="🔍 Search"
							className="border-gray-200 bg-gray-100 w-full"
						/>
					</div>
				)}
			</div>
		</header>
	);
}
