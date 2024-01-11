import Image from 'next/image';
import FeaturedFilm from './featured-film';
import localFont from 'next/font/local';
import { Metadata } from 'next';
import Navigation from './navigation';
import PopularTitles from './popular-titles/popular-titles';

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
		<div className="pb-80">
			<Navigation />
			<FeaturedFilm />
			<div className="content w-full absolute z-10 -mt-[7%] max-sm:-mt-[22%]">
				<div className="titles-overlay absolute"></div>
				<PopularTitles />
			</div>
		</div>
	);
}
