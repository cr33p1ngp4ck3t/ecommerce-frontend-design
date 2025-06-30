"use client";
import {
	Building2,
	ChartBarIcon,
	Globe,
	Headphones,
	Heart,
	HomeIcon,
	ShoppingCartIcon,
} from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

export default function Menubar() {
	useEffect(() => {
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = "auto";
		};
	}, []);

	return (
		<div>
			<div className="w-screen h-screen bg-black/60 fixed top-0 left-0 z-10 ">
				<div className="w-[90%] h-full bg-white overflow-y-scroll">
					<div className="flex flex-col gap-2 bg-gray-200 h-auto p-4">
						<div>
							<Image src={"/assets/Avatar.png"} alt="" width={48} height={48} />
						</div>
						<div className=" flex gap-1">
							<div>Sign in </div>
							<div>|</div>
							<div>Register</div>
						</div>
					</div>
					<div className="bg-white p-4 flex flex-col gap-4">
						<div className="flex gap-2 ">
							<HomeIcon /> <div>Home</div>
						</div>
						<div className="flex gap-2 ">
							<ChartBarIcon /> <div>Categories</div>
						</div>
						<div className="flex gap-2 ">
							<Heart /> <div>Favourites</div>
						</div>
						<div className="flex gap-2 ">
							<ShoppingCartIcon /> <div>my Orders</div>
						</div>
					</div>
					<div className="w-[95%] m-2 h-[1px] bg-gray-200 "></div>
					<div className="bg-white p-4 flex flex-col gap-4">
						<div className="flex gap-2 ">
							<Globe /> <div>English | USD</div>
						</div>
						<div className="flex gap-2 ">
							<Headphones /> <div>Headphones</div>
						</div>
						<div className="flex gap-2 ">
							<Building2 /> <div>About</div>
						</div>
					</div>
					<div className="w-[95%] h-[1px] bg-gray-200 "></div>
					<div className="bg-white p-4 flex flex-col gap-4">
						<div className="flex gap-2 ">
							<Globe /> <div>English | USD</div>
						</div>
						<div className="flex gap-2 ">
							<Headphones /> <div>Headphones</div>
						</div>
						<div className="flex gap-2 ">
							<Building2 /> <div>About</div>
						</div>
					</div>
					<div className="w-[95%] h-[1px] bg-gray-200 "></div>
					<div className="bg-white p-4 flex flex-col gap-4">
						<div className="flex gap-2 ">
							<div></div> <div>User Agreement</div>
						</div>
						<div className="flex gap-2 ">
							<div></div> <div>Partenership</div>
						</div>
						<div className="flex gap-2 ">
							<div></div> <div>Privacy Policy</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
