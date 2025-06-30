import Link from "next/link";

import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbList,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumbs";

export function Breadcrumbs() {
	return (
		<Breadcrumb className="md:block hidden">
			<BreadcrumbList>
				<BreadcrumbItem>
					<div>
						<Link href="/">Home</Link>
					</div>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<div>
						<Link href="/products">Clothing</Link>
					</div>
				</BreadcrumbItem>
				<BreadcrumbSeparator />

				<BreadcrumbItem>
					<div>
						<Link href="/products">Men{`'`}s Wear</Link>
					</div>
				</BreadcrumbItem>
				<BreadcrumbSeparator />

				<BreadcrumbItem>
					<div>
						<Link href="/products">Summer Clothing</Link>
					</div>
				</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	);
}
