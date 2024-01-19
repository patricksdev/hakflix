'use client';
import Image from 'next/image';
import { Suspense } from 'react';
import FeaturedFilm from './featured-film';
import localFont from 'next/font/local';
import { Metadata } from 'next';
import Navigation from './navigation';
import Posters from './shows/posters';
import ShowDetail from './shows/show-detail';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
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
	const [query, setQuery] = useState<string | null>();

	const searchParams = useSearchParams();

	useEffect(() => {
		setQuery(searchParams.get('show'));
	}, [searchParams]);

	useEffect(() => {
		document.body.style.overflow = 'unset';
	});

	return (
		<div className='h-full relative'>
			<Suspense>{query && <ShowDetail showId={query} />}</Suspense>

			<div>
				<Navigation />
				<FeaturedFilm />
				<div
					className='content w-full h-full relative z-10 -mt-[7%] max-sm:-mt-[22%]'
					id='popular'
				>
					<div className='titles-overlay absolute'></div>
					<Posters />
				</div>
			</div>
			<Footer />
		</div>
	);
}
