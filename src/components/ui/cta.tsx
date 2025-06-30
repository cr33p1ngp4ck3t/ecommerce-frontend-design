import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "./select";
import { Button } from "./button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./card";
import { Input } from "./input";

export default function CTA() {
	return (
		<div>
			<div className="mx-auto md:w-[1200px] w-screen  border-gray-200 border rounded-sm  relative ">
				<div
					className="absolute inset-0 bg-cover bg-center -z-20 "
					style={{ backgroundImage: "url('/assets/cta.png')" }}
				/>
				<div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-500/70 to-cyan-300/50 -z-10" />
				<div className="flex md:flex-row flex-col gap-5 p-6 justify-between text-white ">
					<div className="flex flex-col gap-2 md:w-1/3">
						<div className="md:text-[32px] text-[24px] md:font-bold font-semibold">
							An easy way to send requests to all suppliers
						</div>
						<div className="text-base md:block hidden ">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt.
						</div>
					</div>
					<Card className="w-[490px] md:block hidden">
						<CardHeader>
							<CardTitle>Send quote to suppliers</CardTitle>
							<CardDescription>What items you need?</CardDescription>
						</CardHeader>
						<CardContent>
							<form>
								<div className="grid w-full items-center gap-4">
									<div className="flex flex-col gap-2">
										<div className="p-1 px-2 text-black bg-white text-sm rounded-sm border border-gray-200 ">
											What item do you need?
										</div>
										<textarea
											className="h-[70px] text-gray-400 p-1 px-2 bg-white rounded-sm border border-gray-200"
											placeholder="Type more details"
										></textarea>
									</div>
									<div className="flex gap-2 space-y-1.5">
										<Input
											id="name"
											placeholder="Quantity"
											className="w-[200px]"
										/>
										<Select>
											<SelectTrigger id="framework">
												<SelectValue placeholder="Pcs" />
											</SelectTrigger>
											<SelectContent position="popper">
												<SelectItem value="next">Next.js</SelectItem>
												<SelectItem value="react">React</SelectItem>
											</SelectContent>
										</Select>
									</div>
								</div>
							</form>
						</CardContent>
						<CardFooter className="flex justify-between">
							<Button className="bg-blue-500 text-white hover:bg-blue-500 ">
								Send Inquiry
							</Button>
						</CardFooter>
					</Card>
					<Button className="bg-blue-500 text-white hover:bg-blue-500 w-1/3 md:hidden ">
						Send Inquiry
					</Button>
				</div>
			</div>
		</div>
	);
}
