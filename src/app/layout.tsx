import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Hakflix',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
	popup: ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
