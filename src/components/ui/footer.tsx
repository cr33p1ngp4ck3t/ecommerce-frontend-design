"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
	return (
		<div className="w-full flex justify-center items-center flex-col bg-white">
			<footer className="text-gray-600 body-font w-[1200px] mx-auto">
				<div className="container px-5 py-24 flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
					<div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
						<Link
							href="/"
							className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
						>
							<Image
								src={"/assets/logo-colored.png"}
								alt=""
								width={150}
								height={46}
							/>
						</Link>
						<p className="my-2 ">
							Best information about the company goes here but now lorem ipsum is
						</p>
						<Image
							src={"/svgs/Group 987.png"}
							alt=""
							width={200}
							height={50}
							className="cursor-pointer"
						/>
					</div>

					<div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
						{["About", "Partnership", "Information", "For Users", "Get App"].map(
							(title, index) => (
								<div key={index} className="lg:w-1/5 md:w-1/2 w-full px-4">
									<h2 className="text-lg font-medium text-gray-900 tracking-widest mb-3">
										{title}
									</h2>
									<nav className="list-none space-y-1 mb-10">
										{title === "Get App"
											? [
													"/assets/market-button.png",
													"/assets/market-button1.png",
											  ].map((link, i) => (
													<li key={i}>
														<Image
															src={link}
															alt=""
															width={124}
															height={42}
														/>
													</li>
											  ))
											: ["About Us", "Find Store", "Categories", "Blogs"].map(
													(link, i) => (
														<li key={i}>
															<Link
																href="/"
																className="text-gray-400 hover:text-gray-300"
															>
																{link}
															</Link>
														</li>
													)
											  )}
									</nav>
								</div>
							)
						)}
					</div>
				</div>
			</footer>
			<div className="w-screen bg-gray-100">
				<div className="w-[1200px] container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
					<p className="text-gray-500 text-sm text-center sm:text-left">
						© 2023 Ecommerce
					</p>
				</div>
			</div>
		</div>
	);
}
