import Image from 'next/image';
import FeaturedFilm from './featured-film';
import localFont from 'next/font/local';
import { Metadata } from 'next';
import Navigation from './navigation';

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
	return (
		<div className='overflow-visible static'>
			<Navigation />
			<FeaturedFilm />
		</div>
	);
}
