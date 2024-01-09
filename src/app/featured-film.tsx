import Image from 'next/image';
import thumb from '../../public/images/thumb.webp';

export default function FeaturedFilm() {
	return (
		<div className='relative w-full h-[100vh] max-sm:h-[50vh] -mt-9'>
			<Image
				src={thumb}
				alt='Featured Film'
				className='w-full h-[100vh] object-cover max-sm:h-[50vh]'
			/>
			<div className='dark-overlay h-[100vh] max-sm:h-[50vh]'></div>
		</div>
	);
}
