import { Button } from "./button";
import { Input } from "./input";

export default function Newsletter() {
	return (
		<div className="w-screen bg-gray-100 p-10">
			<div className=" flex items-center justify-center">
				<div className="flex flex-col items-center justify-center gap-4">
					<div className="flex flex-col items-center justify-center">
						<div className="text-xl font-semibold">Subscribe to our Newsletter</div>
						<div className="text-gray-400">
							Get daily news on upcoming offers from many suppliers all over the world
						</div>
					</div>
					<div className="flex gap-2">
						<Input className="p-2 border-gray-200 bg-white " placeholder="Email" />
						<Button className="bg-blue-500 text-white hover:bg-blue-500">
							Subscribe
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
