'use client';
import FeaturedFilm from './featured-film';
import localFont from 'next/font/local';
import Navigation from './navigation';
import Shows from './shows/shows';
import { useEffect } from 'react';
import Footer from './footer';

const NetflixSans = localFont({
	src: [
		{
			path: '../../public/fonts/NetflixSans-Regular.otf',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../../public/fonts/NetflixSans-Medium.otf',
			weight: '500',
			style: 'medium',
		},
		{
			path: '../../public/fonts/NetflixSans-Bold.otf',
			weight: '700',
			style: 'bold',
		},
	],
});

export default function Home() {
	useEffect(() => {
		document.body.style.overflow = 'unset';
	});

	return (
		<div className="h-full relative">
			<Navigation />
			<FeaturedFilm />
			<div
				className="w-full h-full relative z-10 -mt-[7%] max-sm:-mt-[22%]"
				id="popular"
			>
				<div className="titles-overlay absolute"></div>
				<Shows />
			</div>
			{/* <Footer /> */}
		</div>
	);
}
