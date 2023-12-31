import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";

const inter = Roboto({
	variable: "--font-roboto",
	subsets: ["latin"],
	weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
	title: "Lumi",
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html
			lang="en"
			className="dark scrollbar-thin scrollbar-track-zinc-900 scrollbar-thumb-zinc-700"
		>
			<body
				className={`${inter.variable} bg-zinc-900 font-inter text-lg font-bold text-zinc-100 antialiased `}
			>
				{children}
			</body>
		</html>
	);
}
