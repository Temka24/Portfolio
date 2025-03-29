import type { Metadata } from "next";
import "./globals.css";
import { roboto } from "./font";

export const metadata: Metadata = {
	title: "Portfolio",
	description: "Created by Temka",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={roboto.className}
			>
				{children}
			</body>
		</html>
	);
}
