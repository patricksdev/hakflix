import Image from 'next/image';
import thumb from '../../public/images/thumb.webp';
import thumb_title from '../../public/images/thumb_title.webp';

export default function FeaturedFilm() {
	return (
		<div className='relative w-full h-[100vh] max-sm:h-[50vh]'>
			<div className='dark-overlay h-[100vh] max-sm:h-[50vh]'></div>
			<Image
				src={thumb}
				alt='Featured Film'
				className='w-full h-[100vh] object-cover max-sm:h-[50vh] -mt-14'
			/>
			<div className=''>
				<Image
					src={thumb_title}
					alt='Thumb Title'
					className='absolute top-14 z-10'
				/>
			</div>
		</div>
	);
}
