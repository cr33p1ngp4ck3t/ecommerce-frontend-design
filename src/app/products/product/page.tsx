"use client";
import { productRecom } from "@/components/data/product";
import { Breadcrumbs } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ui/productcard";
import { Check, Globe, MessageSquareTextIcon, ShieldCheckIcon, ShoppingBasket } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useState } from "react";

export default function ProductPage() {
	const [activeTab, setActiveTab] = useState("Description");

	const tabs = ["Description", "Reviews", "Shipping", "About Seller"];
	return (
		<div>
			<div className="md:w-[1200px] w-screen mx-auto">
				<div className="flex flex-col mt-8 gap-4 w-full ">
					<Breadcrumbs />
					<div className="flex flex-col gap-5">
						<div className="flex flex-col md:grid md:grid-cols-4 bg-white p-4 border border-gray-200 gap-5">
							<div className="md:col-span-3">
								<div className="flex gap-4 md:flex-row flex-col">
									<div className="flex-2/5">
										<div className="flex flex-col gap-4">
											<div className="border border-gray-200 rounded-sm">
												<Image
													src={"/product/image-big.jpg"}
													alt=""
													width={345}
													height={345}
													className="mx-auto"
												/>
											</div>
											<div>
												<div className=" justify-between md:flex hidden">
													{[
														"image 35",
														"image 39",
														"image 36",
														"image 37",
														"image 38",
														"image 40",
													].map((img, index) => (
														<div
															className="border border-gray-200 rounded-sm object-cover object-center flex items-center justify-center"
															key={index}
														>
															<Image
																src={`/product/${img}.png`}
																alt=""
																width={48}
																height={48}
																className="aspect-auto"
															/>
														</div>
													))}
												</div>
											</div>
										</div>
									</div>
									<div className="flex flex-col flex-3/5 gap-2">
										<div className=" gap-2 items-center text-green-700 md:flex hidden">
											<Check /> In Stock
										</div>
										<div className="text-xl font-medium">
											Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
										</div>
										<div className="flex gap-2 items-center text-gray-400 bg-white">
											<div className="flex text-amber-500 items-center gap-2">
												<div className="flex">
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
												<div>9.3</div>
											</div>
											<div className="flex gap-1">
												<MessageSquareTextIcon /> 32 reviews
											</div>
											<div className="flex gap-1">
												<ShoppingBasket />
												154 sold
											</div>
										</div>
										<div className="p-4 bg-red-50 grid grid-cols-4 rounded-sm">
											<div className="col-span-1">
												<div className="flex flex-col gap-2">
													<div className="text-red-500 text-lg font-medium">
														$98.00
													</div>
													<div className="text-sm">50-100 pcs</div>
												</div>
											</div>
											<div className="col-span-1">
												<div className="flex flex-col gap-2">
													<div className="text-xl font-medium">
														$90.00
													</div>
													<div className="text-sm">100-700 pcs</div>
												</div>
											</div>
											<div className="col-span-1">
												<div className="flex flex-col gap-2">
													<div className="text-xl font-medium">
														$78.00
													</div>
													<div className="text-sm">700+ pcs</div>
												</div>
											</div>
										</div>
										<div className="p-4 flex rounded-sm">
											<div className="grid grid-cols-5 gap-x-4 gap-y-2 w-full text-gray-500">
												{[
													{ label: "Price:", value: "Negotiable" },
													{ label: "Type:", value: "Classical Shoes" },
													{
														label: "Material:",
														value: "Plastic Material",
													},
													{ label: "Design:", value: "Modern Nice" },
													{
														label: "Customization:",
														value: "Customized logo and design packages",
													},
													{
														label: "Protection:",
														value: "Refund Policy",
													},
													{
														label: "Warranty:",
														value: "2 years full warranty",
													},
												].map((item, index) => (
													<React.Fragment key={index}>
														<div className="font-medium col-span-2">
															{item.label}
														</div>
														<div className="text-gray-800   col-span-2">
															{item.value}
														</div>
														{(index == 0 ||
															index == 3 ||
															index == 6) && (
															<div className="col-span-5 h-[1px] my-1 bg-gray-200 w-full" />
														)}
													</React.Fragment>
												))}
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="md:col-span-1 flex flex-col w-full gap-4">
								<div className="flex flex-col bg-white border border-gray-200 rounded-sm gap-4 sticky top-8 p-4 h-fit">
									<div className="flex gap-2  ">
										<div className="p-1 px-4 rounded-sm bg-[#C6F3F1] ">
											<div className="text-[#4CA7A799] text-3xl font-medium">
												R
											</div>
										</div>
										<div className="flex flex-col">
											<div>Supplier</div>
											<div>Guanjoi Trading LLC</div>
										</div>
									</div>
									<div className="flex gap-4 border-t border-t-gray-200 pt-4 items-center">
										<div className="flex flex-col gap-2 text-gray-400">
											<Image
												src={"/assets/DE@2x.png"}
												alt=" "
												width={24}
												height={20}
											/>
											<ShieldCheckIcon />
											<Globe />
										</div>
										<div className="flex flex-col text-gray-400 gap-2">
											<div>Germany, Berlin</div>
											<div> Verified Seller</div>
											<div>Worldwide Shipping</div>
										</div>
									</div>
									<div className="flex flex-col gap-2">
										<Button className="bg-blue-500 text-white px-2 p-1 flex gap-2 rounded-sm hover:bg-blue-600">
											Send Inquiry
										</Button>
										<Button className="bg-white text-blue-500 p-1 px-2 rounded-sm border border-gray-200 hover:bg-white">
											Sellers Profile
										</Button>
									</div>
								</div>
								<div className="flex gap-2 items-center justify-center ">
									<Image
										src={"/assets/favorite.png"}
										alt=" "
										width={24}
										height={24}
									/>
									<div className="text-blue-500 font-medium">Save for later</div>
								</div>
							</div>
						</div>
						<div className="flex flex-col md:grid md:grid-cols-4 gap-5">
							<div className="bg-white border border-gray-200 p-4 col-span-3 rounded-sm">
								<div className="flex flex-col gap-4">
									<div className="flex w-full gap-5 font-medium border-b border-b-gray-200">
										{tabs.map((tab) => (
											<div
												key={tab}
												className={`cursor-pointer p-1 px-2 ${
													activeTab === tab
														? "text-blue-500  border-b border-b-blue-500 "
														: "text-gray-500"
												}`}
												onClick={() => setActiveTab(tab)}
											>
												{tab}
											</div>
										))}
									</div>
									<div>
										<div className=" mb-4 text-gray-600 text-wrap pr-8">
											Lorem ipsum dolor sit amet, consectetur adipisicing
											elit, sed do eiusmod tempor incididunt ut labore et
											dolore magna aliqua. Ut enim ad minim veniam, quis
											nostrud exercitation ullamco laboris nisi ut aliquip ex
											ea commodo consequat. Duis aute irure dolor in
											reprehenderit in voluptate velit esse cillum dolore eu
											fugiat nulla pariatur. Lorem ipsum dolor sit amet,
											consectetur adipisicing elit, sed do eiusmod tempor
											incididunt ut labore et dolore magna aliqua. Ut enim ad
											minim veniam,
											<br /> Quis nostrud exercitation ullamco laboris nisi ut
											aliquip ex ea commodo consequat. Duis aute irure dolor
											in reprehenderit in voluptate velit esse cillum dolore
											eu fugiat nulla pariatur.{" "}
										</div>
										<div className="grid grid-cols-3 w-auto md:w-[550px]">
											<div className="col-span-1 bg-gray-100 ">
												<div className="border border-gray-200 p-1">
													Model
												</div>
												<div className="border border-gray-200 p-1">
													Style
												</div>
												<div className="border border-gray-200 p-1">
													Certificate
												</div>
												<div className="border border-gray-200 p-1">
													Size
												</div>
												<div className="border border-gray-200 p-1">
													Memory
												</div>
											</div>
											<div className="col-span-2 bg-white">
												<div className="border border-gray-200 p-1">
													#878787
												</div>
												<div className="border border-gray-200 p-1">
													Classic Style
												</div>
												<div className="border border-gray-200 p-1">
													ISO-89235671
												</div>
												<div className="border border-gray-200 p-1">
													34mm x 450mm x 19mm
												</div>
												<div className="border border-gray-200 p-1">
													36GB RAM
												</div>
											</div>
										</div>
									</div>
									<div className="flex flex-col gap-2 items-start justify-center my-4">
										<div className="flex gap-2">
											<Check className="text-gray-400" />
											Some great feature name here
										</div>
										<div className="flex gap-2">
											<Check className="text-gray-400" />
											SDuis aute irure dolor in reprehenderite
										</div>
										<div className="flex gap-2">
											<Check className="text-gray-400" />
											Lorem ipsum dolor sit amet, consectetur
										</div>

										<div className="flex gap-2">
											<Check className="text-gray-400" />
											Some great feature name here
										</div>
									</div>
								</div>
							</div>
							<div className="col-span-1">
								<div className="flex flex-col gap-3 p-4 bg-white border border-gray-200 rounded-sm">
									<div className="text-xl font-medium">You may like</div>
									<div className="flex flex-col gap-3">
										{[
											"/product/item-4.png",
											"/product/item-3.png",
											"/product/item-2.png",
											"/product/item-1.png",
											"/product/item.png",
										].map((img, index) => (
											<div key={index} className="flex gap-2 items-start">
												<div className="border border-gray-200 rounded-sm">
													<Image
														src={`${img}`}
														alt=""
														width={70}
														height={70}
														className="p-1"
													/>
												</div>
												<div className="flex flex-col ">
													<div className="text-[#1C1C1C]">
														Men Blazers Sets Elegant Formal
													</div>
													<div className="text-gray-400">
														$7.00 - $99.00
													</div>
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
						<div className="flex flex-col gap-2 p-4 bg-white border border-gray-200 rounded-sm">
							<div className="text-xl font-medium">Related products</div>
							<div className="flex md:grid md:grid-cols-6 gap-2 md:overflow-x-hidden w-full overflow-x-auto snap-x snap-mandatory">
								<ProductCard items={productRecom} style={false} style2={true} />
							</div>
						</div>
						<div>
							<div className="relative w-[1200px] md:block hidden">
								<Image
									src={`/assets/Rectangle-cut.png`}
									alt=" "
									width={745}
									height={120}
									className="-z-10 absolute inset-0"
								/>
								<Image
									src={`/assets/Rectangle.png`}
									alt=" "
									width={1180}
									height={120}
									className="-z-20 absolute right-0"
								/>
								<div className="flex justify-between items-center my-8 p-8">
									<div className="flex flex-col ">
										<div className="text-white text-2xl font-medium">
											Super discount on more than 100 USD
										</div>
										<div className="text-white font-light">
											Have you ever finally just write dummy info
										</div>
									</div>
									<Button className="bg-orange-400 text-white hover:bg-orange-400 p-1 px-4 ">
										Shop Now
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
