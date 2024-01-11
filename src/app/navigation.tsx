import Image from 'next/image';
import hakflix from '../../public/logos/hakflix.svg';

export default function Navigation() {
	return (
		<div className="nav sticky h-16 flex z-20 items-center px-14 gap-12 max-sm:gap-6 py-6 max-sm:px-8">
			<Image
				src={hakflix}
				alt="Hakflix"
				className="h-7 w-auto"
			/>
			<div className="flex text-sm gap-5">
				<a
					href="#"
					className="font-medium"
				>
					Home
				</a>
				<a href="#">Popular</a>
			</div>
		</div>
	);
}
