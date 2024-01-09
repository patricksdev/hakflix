import Image from 'next/image';
import hakflix from '../../public/logos/hakflix.svg';

export default function Navigation() {
	return (
		<div className='nav sticky h-14 left-0 top-0 flex z-10 items-center px-14 gap-12 pt-4'>
			<Image
				src={hakflix}
				alt='Hakflix'
				className='h-7 w-auto'
			/>
			<div className='flex text-sm gap-5'>
				<a
					href='#'
					className='font-medium'
				>
					Home
				</a>
				<a href='#'>Popular</a>
			</div>
		</div>
	);
}
