import Image from 'next/image';
import thumb from '../../public/images/thumb.webp';
import thumb_title from '../../public/images/thumb_title.webp';

import play from '../../public/icons/play.svg';
import Link from 'next/link';

export default function FeaturedFilm() {
	return (
		<div className='relative w-full h-[100vh] max-sm:h-[50vh]'>
			<div className='dark-overlay h-[100vh] max-sm:h-[50vh]'></div>
			<Image
				src={thumb}
				alt='Featured Film'
				className='w-full h-[100vh] object-cover max-sm:h-[50vh] -mt-14'
			/>
			<div className='absolute top-36 left-14 z-10 w-[40%] flex flex-col gap-5'>
				<Image
					src={thumb_title}
					alt='Thumb Title'
					className='w-[90%]'
				/>
				<h1 className='hero-text-shadow text-[1.6vw] font-medium'>
					Watch the Limited Film now
				</h1>
				<p className='hero-text-shadow text-lg'>
					Jenny ist eingeschlafen. Begleite sie bei ihren süßen Albträumen über
					ihre DigBiz Abschlussklasse.
				</p>
				<div className='flex flex-col'>
					<Link
						href='https://youtube.com'
						target='_blank'
					>
						<div className='flex gap-2 items-center primary-button'>
							<Image
								src={play}
								alt='Play'
								className='w-7 h-auto'
							/>
							<span className='text-lg font-medium'>Play</span>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
}
