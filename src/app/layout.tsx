import { MouseProvider } from '@/components/mouse/context';
import '@/styles/globals.css';
import localFont from 'next/font/local';

const grtsk = localFont({
	src: [
		{
			path: './fonts/grtsk-light.ttf',
			weight: '500',
		},
		{
			path: './fonts/grtsk-tera.ttf',
			weight: '700',
		},
	],
	variable: '--font-grtsk',
});

const _monaspace = localFont({
	src: [
		{
			path: './fonts/mona-wide.otf',
			weight: '500',
		},
	],
	variable: '--font-monospace',
});

export const metadata = {
	title: 'PRSHL',
	icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

export interface MouseState {
	state: 'hover' | 'click';
	renderId: string;
	imageUrl?: string;
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	/** Render */
	return (
		<MouseProvider>
			<html lang="en">
				<body className={grtsk.className}>{children}</body>
			</html>
		</MouseProvider>
	);
}
