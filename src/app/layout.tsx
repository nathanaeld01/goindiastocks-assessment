import "@/styles/globals.css";

import { cn } from "@/lib/utils";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

type Props = Readonly<{
	children: React.ReactNode;
}>;

export const metadata: Metadata = {
	title: "GoIndiaStocks Assessment App",
	description: "GoIndiaStocks Assessment App",
	icons: {
		icon: "/favicon.ico",
	},
};

export default function RootLayout({ children }: Props) {
	return (
		<html lang="en">
			<body className={cn("flex w-full h-screen", inter.className)}>
				{children}
			</body>
		</html>
	);
}
