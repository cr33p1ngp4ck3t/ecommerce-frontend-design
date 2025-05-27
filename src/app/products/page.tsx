"use client";
import { Breadcrumbs } from "@/components/ui/breadcrumb";
import { Checkbox } from "@/components/ui/checkbox";
import { SidebarGroup, SidebarGroupLabel, SidebarGroupContent } from "@/components/ui/sidebar";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@radix-ui/react-collapsible";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ChevronDown, ChevronLeft, ChevronRight, Grid2X2, Menu } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";
import Navbar from "@/components/ui/navbar";
import { Combobox } from "@/components/ui/combobox";
import { featured } from "@/components/data/info";
import ProductCardStyle from "@/components/ui/productcard-list";
import { products } from "@/components/data/product";
import Newsletter from "@/components/ui/newsletter";

export default function Product() {
	const [isGrid, setIsGrid] = useState(false);

	const onClick = () => {
		setIsGrid((prev) => !prev);
	};
	return (
		<>
			<Navbar />
			<div className="w-[1200px] mx-auto mb-10 ">
				<div className="flex flex-col gap-4">
					<div className="p-5 text-gray-400 text-lg">
						<Breadcrumbs />
					</div>
					<div className="grid grid-cols-5">
						{/* Sidebar */}
						<div className="col-span-1 px-2">
							<div className="w-full bg-gray-200 h-[1px] mt-4" />
							<Collapsible defaultOpen className="group/collapsible">
								<SidebarGroup>
									<SidebarGroupLabel className="text-base font-bold mb-2" asChild>
										<CollapsibleTrigger>
											Category
											<ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
										</CollapsibleTrigger>
									</SidebarGroupLabel>
									<CollapsibleContent>
										<SidebarGroupContent className="text-shadow-[0px_4px_2px_rgb(0,0,0,0.1),0px_4px_3px_rgb(0,0,0,0.1),0px_4px_2px_rgb(0,0,0,0.1)]">
											Mobile Accessory
										</SidebarGroupContent>
										<SidebarGroupContent className="text-shadow-[0px_4px_2px_rgb(0,0,0,0.1),0px_4px_3px_rgb(0,0,0,0.1),0px_4px_2px_rgb(0,0,0,0.1)]">
											Electronics
										</SidebarGroupContent>
										<SidebarGroupContent className="text-shadow-[0px_4px_2px_rgb(0,0,0,0.1),0px_4px_3px_rgb(0,0,0,0.1),0px_4px_2px_rgb(0,0,0,0.1)]">
											Smartphones
										</SidebarGroupContent>
										<SidebarGroupContent className="text-shadow-[0px_4px_2px_rgb(0,0,0,0.1),0px_4px_3px_rgb(0,0,0,0.1),0px_4px_2px_rgb(0,0,0,0.1)]">
											Modern Tech
										</SidebarGroupContent>
										<div className="text-blue-500 font-medium cursor-pointer text-shadow-[0px_4px_2px_rgb(0,0,0,0.1),0px_4px_3px_rgb(0,0,0,0.1),0px_4px_2px_rgb(0,0,0,0.1)] my-2">
											See All
										</div>
									</CollapsibleContent>
								</SidebarGroup>
							</Collapsible>
							<div className="w-full bg-gray-200 h-[1px] mt-4" />
							<Collapsible defaultOpen className="group/collapsible">
								<SidebarGroup>
									<SidebarGroupLabel className="text-base font-bold mb-2" asChild>
										<CollapsibleTrigger>
											Brands
											<ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
										</CollapsibleTrigger>
									</SidebarGroupLabel>
									<CollapsibleContent className="flex flex-col gap-1 items-start justify-start">
										<div className="flex items-center my-2 gap-2">
											<Checkbox />
											<label className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-shadow-[0px_4px_2px_rgb(0,0,0,0.1),0px_4px_3px_rgb(0,0,0,0.1),0px_4px_2px_rgb(0,0,0,0.1)]">
												Samsung
											</label>
										</div>
										<div className="flex items-center my-2 gap-2">
											<Checkbox />
											<label className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-shadow-[0px_4px_2px_rgb(0,0,0,0.1),0px_4px_3px_rgb(0,0,0,0.1),0px_4px_2px_rgb(0,0,0,0.1)]">
												Huawei
											</label>
										</div>
										<div className="flex items-center my-2 gap-2">
											<Checkbox />
											<label className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-shadow-[0px_4px_2px_rgb(0,0,0,0.1),0px_4px_3px_rgb(0,0,0,0.1),0px_4px_2px_rgb(0,0,0,0.1)]">
												Apple
											</label>
										</div>
										<div className="flex items-center my-2 gap-2">
											<Checkbox />
											<label className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-shadow-[0px_4px_2px_rgb(0,0,0,0.1),0px_4px_3px_rgb(0,0,0,0.1),0px_4px_2px_rgb(0,0,0,0.1)]">
												Pocco
											</label>
										</div>
										<div className="flex items-center my-2 gap-2">
											<Checkbox />
											<label className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-shadow-[0px_4px_2px_rgb(0,0,0,0.1),0px_4px_3px_rgb(0,0,0,0.1),0px_4px_2px_rgb(0,0,0,0.1)]">
												Lenovo
											</label>
										</div>
										<div className="text-blue-500 font-medium cursor-pointer text-shadow-[0px_4px_2px_rgb(0,0,0,0.1),0px_4px_3px_rgb(0,0,0,0.1),0px_4px_2px_rgb(0,0,0,0.1)]">
											See All
										</div>
									</CollapsibleContent>
								</SidebarGroup>
							</Collapsible>
							<div className="w-full bg-gray-200 h-[1px] mt-4" />
							<Collapsible defaultOpen className="group/collapsible">
								<SidebarGroup>
									<SidebarGroupLabel className="text-base font-bold mb-2" asChild>
										<CollapsibleTrigger>
											Features
											<ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
										</CollapsibleTrigger>
									</SidebarGroupLabel>
									<CollapsibleContent className="flex flex-col gap-1 items-start justify-start">
										<div className="flex items-center my-2 gap-2">
											<Checkbox />
											<label className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-shadow-[0px_4px_2px_rgb(0,0,0,0.1),0px_4px_3px_rgb(0,0,0,0.1),0px_4px_2px_rgb(0,0,0,0.1)]">
												Metallic
											</label>
										</div>
										<div className="flex items-center my-2 gap-2">
											<Checkbox />
											<label className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-shadow-[0px_4px_2px_rgb(0,0,0,0.1),0px_4px_3px_rgb(0,0,0,0.1),0px_4px_2px_rgb(0,0,0,0.1)]">
												Plastic Cover
											</label>
										</div>
										<div className="flex items-center my-2 gap-2">
											<Checkbox />
											<label className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-shadow-[0px_4px_2px_rgb(0,0,0,0.1),0px_4px_3px_rgb(0,0,0,0.1),0px_4px_2px_rgb(0,0,0,0.1)]">
												8GB Ram
											</label>
										</div>
										<div className="flex items-center my-2 gap-2">
											<Checkbox />
											<label className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-shadow-[0px_4px_2px_rgb(0,0,0,0.1),0px_4px_3px_rgb(0,0,0,0.1),0px_4px_2px_rgb(0,0,0,0.1)]">
												Super Power
											</label>
										</div>
										<div className="flex items-center my-2 gap-2">
											<Checkbox />
											<label className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-shadow-[0px_4px_2px_rgb(0,0,0,0.1),0px_4px_3px_rgb(0,0,0,0.1),0px_4px_2px_rgb(0,0,0,0.1)]">
												Large Memory
											</label>
										</div>
										<div className="text-blue-500 font-medium cursor-pointer text-shadow-[0px_4px_2px_rgb(0,0,0,0.1),0px_4px_3px_rgb(0,0,0,0.1),0px_4px_2px_rgb(0,0,0,0.1)]">
											See All
										</div>
									</CollapsibleContent>
								</SidebarGroup>
							</Collapsible>
							<div className="w-full bg-gray-200 h-[1px] mt-4" />
							<Collapsible defaultOpen className="group/collapsible">
								<SidebarGroup>
									<SidebarGroupLabel className="text-base font-bold mb-2" asChild>
										<CollapsibleTrigger>
											Price Range
											<ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
										</CollapsibleTrigger>
									</SidebarGroupLabel>
									<CollapsibleContent className="flex flex-col gap-4">
										<Slider
											defaultValue={[30]}
											max={100}
											step={1}
											className="w-full my-4"
										/>
										<div className="flex flex-col gap-4">
											<div className="flex gap-4">
												<div>
													<div className="text-shadow-[0px_4px_2px_rgb(0,0,0,0.1),0px_4px_3px_rgb(0,0,0,0.1),0px_4px_2px_rgb(0,0,0,0.1)]">
														Min
													</div>
													<Input
														className="bg-white backdrop-blur-lg border shadow-lg border-gray-200"
														placeholder="0"
													/>
												</div>
												<div>
													<div className="text-shadow-[0px_4px_2px_rgb(0,0,0,0.1),0px_4px_3px_rgb(0,0,0,0.1),0px_4px_2px_rgb(0,0,0,0.1)]">
														Max
													</div>
													<Input
														className="bg-white backdrop-blur-lg border shadow-lg border-gray-200"
														placeholder="999999"
													/>
												</div>
											</div>
											<Button className="text-center text-blue-500 bg-white shadow-lg border border-gray-200 hover:bg-white">
												Apply
											</Button>
										</div>
									</CollapsibleContent>
								</SidebarGroup>
							</Collapsible>
							<div className="w-full bg-gray-200 h-[1px] mt-4" />
							<Collapsible defaultOpen className="group/collapsible">
								<SidebarGroup>
									<SidebarGroupLabel className="text-base font-bold mb-2" asChild>
										<CollapsibleTrigger>
											Condition
											<ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
										</CollapsibleTrigger>
									</SidebarGroupLabel>
									<CollapsibleContent>
										<RadioGroup defaultValue="Any">
											<div className="flex items-center space-x-2">
												<RadioGroupItem
													value="Any"
													id="r1"
													className="border-gray-400 "
												/>
												<Label className="text-shadow-[0px_4px_2px_rgb(0,0,0,0.1),0px_4px_3px_rgb(0,0,0,0.1),0px_4px_2px_rgb(0,0,0,0.1)] font-normal text-base py-1">
													Any
												</Label>
											</div>
											<div className="flex items-center space-x-2">
												<RadioGroupItem
													value="Refurbished"
													id="r2"
													className="border-gray-400 "
												/>
												<Label className="text-shadow-[0px_4px_2px_rgb(0,0,0,0.1),0px_4px_3px_rgb(0,0,0,0.1),0px_4px_2px_rgb(0,0,0,0.1)] font-normal text-base py-1">
													Refurbished
												</Label>
											</div>
											<div className="flex items-center space-x-2">
												<RadioGroupItem
													value="Brand New"
													id="r3"
													className="border-gray-400 "
												/>
												<Label className="text-shadow-[0px_4px_2px_rgb(0,0,0,0.1),0px_4px_3px_rgb(0,0,0,0.1),0px_4px_2px_rgb(0,0,0,0.1)] font-normal text-base py-1">
													Brand New
												</Label>
											</div>
											<div className="flex items-center space-x-2">
												<RadioGroupItem
													value="Old items"
													id="r4"
													className="border-gray-400 "
												/>
												<Label className="text-shadow-[0px_4px_2px_rgb(0,0,0,0.1),0px_4px_3px_rgb(0,0,0,0.1),0px_4px_2px_rgb(0,0,0,0.1)] font-normal text-base py-1">
													Old items
												</Label>
											</div>
										</RadioGroup>
									</CollapsibleContent>
								</SidebarGroup>
							</Collapsible>
							<div className="w-full bg-gray-200 h-[1px] mt-4" />

							<Collapsible defaultOpen className="group/collapsible">
								<SidebarGroup>
									<SidebarGroupLabel className="text-base font-bold mb-2" asChild>
										<CollapsibleTrigger>
											Ratings
											<ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
										</CollapsibleTrigger>
									</SidebarGroupLabel>
									<CollapsibleContent>
										<div className="flex items-center my-2 gap-2">
											<div className="flex flex-col gap-2">
												{[...Array(4)].map((_, rowIndex) => (
													<div key={rowIndex} className="flex gap-1">
														<Checkbox />
														{[...Array(5 - rowIndex)].map(
															(_, starIndex) => (
																<Image
																	key={starIndex}
																	src={`/assets/star-filled.png`}
																	alt="Star"
																	width={18}
																	height={18}
																/>
															)
														)}
														{[...Array(rowIndex)].map(
															(_, emptyIndex) => (
																<Image
																	key={emptyIndex}
																	src={`/assets/star-empty.png`}
																	alt="Star"
																	width={18}
																	height={18}
																/>
															)
														)}
													</div>
												))}
											</div>
										</div>
									</CollapsibleContent>
								</SidebarGroup>
							</Collapsible>
						</div>
						{/* Listing */}
						<div className="col-span-4 px-4 py-2 flex flex-col gap-5">
							{/* Filter */}
							<div className="w-full p-2 bg-white border border-gray-200 rounded-sm">
								<div className="flex items-center justify-between">
									<div className="ml-2">
										12,911 items in <strong>Mobile Accessory</strong>
									</div>
									<div className="flex gap-2 items-center justify-center">
										<div className="flex items-center my-2 gap-2 rounded-sm">
											<Checkbox />
											<label className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mr-2">
												Verified Only
											</label>
										</div>
										<Combobox content={featured} placeholder="Featured" />
										<div className="border border-gray-200 rounded-sm flex p-1 gap-0.5">
											<Menu
												className=" w-6 h-6 cursor-pointer"
												onClick={onClick}
											/>
											<div className="w-[1px] border border-gray-200 " />
											<Grid2X2
												className=" w-6 h-6 cursor-pointer "
												onClick={onClick}
											/>
										</div>
									</div>
								</div>
							</div>
							{/* Products */}
							{isGrid ? (
								<div>
									<div>
										<div className="grid grid-cols-3 gap-4">
											<ProductCardStyle items={products} grid={true} />
										</div>
									</div>
								</div>
							) : (
								<div className="flex flex-col gap-3">
									<ProductCardStyle items={products} grid={false} />
								</div>
							)}
						</div>
					</div>
					{/* Pagination */}
					<div className="ml-auto p-4 flex gap-4">
						<div className="border bg-white border-gray-200 rounded-sm">
							<div className="p-2 flex gap-2 cursor-pointer ">
								Show 10 <ChevronDown />
							</div>
						</div>
						<div className="flex cursor-pointer">
							<div className="border bg-white border-gray-200 rounded-l-sm">
								<div className="p-2 flex gap-2 ">
									<ChevronLeft />
								</div>
							</div>
							<div className="border bg-white px-2 border-gray-200">
								<div className="p-2 flex gap-2  ">1</div>
							</div>
							<div className="border bg-white px-2 border-gray-200">
								<div className="p-2 flex gap-2  ">2</div>
							</div>
							<div className="border bg-white px-2 border-gray-200">
								<div className="p-2 flex gap-2  ">3</div>
							</div>
							<div className="border bg-white border-gray-200 rounded-r-sm ">
								<div className="p-2 flex gap-2 ">
									<ChevronRight />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Newsletter />
		</>
	);
}
