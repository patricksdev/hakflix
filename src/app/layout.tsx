import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
import ShowDetail from './shows/show-detail';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Hakflix',
};

export default function RootLayout({
	children,
	show,
}: {
	children: React.ReactNode;
	show: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				{show}
				{children}
			</body>
		</html>
	);
}
