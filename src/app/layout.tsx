"use client";
import "./globals.css";
import Header from "@/components/ui/header";
import { NextFont } from "@next/font";
import Footer from "@/components/ui/footer";

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
	return (
		<html lang="en">
			<body className={`antialiased bg-gray-50 ${inter}`}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}

