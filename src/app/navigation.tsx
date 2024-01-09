import Image from 'next/image';
import hakflix from '../../public/logos/hakflix.svg';

export default function Navigation() {
	return (
		<div className='sticky h-auto left-0 top-0 flex z-10 items-center'>
			<Image
				src={hakflix}
				alt='Hakflix'
				className='h-9 w-auto'
			/>
			<div className='flex'>
				<a>Home</a>
				<a>Popular</a>
			</div>
		</div>
	);
}
