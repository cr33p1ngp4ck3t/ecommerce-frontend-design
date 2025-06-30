"use client";
import "./globals.css";
import Header from "@/components/ui/header";
import { NextFont } from "@next/font";
import Footer from "@/components/ui/footer";
import { usePathname } from "next/navigation";

const inter: NextFont = {
	className: "inter",
	style: {
		fontFamily: "Inter",
		fontStyle: "Swap",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const pathname = usePathname();
	return (
		<html lang="en">
			<body className={`antialiased bg-gray-50 ${inter}`}>
				{pathname == "/" ? (
					<Header style={true} search />
				) : pathname == "/products" ? (
					<Header style={false} search title="Products" />
				) : (
					<Header style={false} search={false} title="Shopping Cart" />
				)}
				{children}
				<Footer />
			</body>
		</html>
	);
}

