import { Lenis } from "@/components/providers";
import "@/styles/globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

const grtsk = localFont({
	src: [
		{
			path: "./fonts/grtsk-light.ttf",
			weight: "500",
		},
		{
			path: "./fonts/grtsk-tera.ttf",
			weight: "700",
		},
	],
	variable: "--font-grtsk",
});

const _monaspace = localFont({
	src: [
		{
			path: "./fonts/mona-wide.otf",
			weight: "500",
		},
	],
	variable: "--font-monospace",
});

export const metadata: Metadata = {
	title: "PRSHL",
	description: "Personal portfolio of Florian Pürschel",
	icons: [{ rel: "icon", url: "/favicon.ico" }],
	keywords: [
		"portfolio",
		"florian",
		"pürschel",
		"prshl",
		"running",
		"berlin",
		"marathon",
		"software",
		"development",
	],
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	/** Render */
	return (
		<html lang="en">
			<Lenis>
				<body className={grtsk.className}>{children}</body>
			</Lenis>
		</html>
	);
}
