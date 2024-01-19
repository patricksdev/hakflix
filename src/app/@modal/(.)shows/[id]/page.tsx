'use client';
import { useRouter } from 'next/navigation';
import { hakflixShow } from '../../../../../public/shows/shows';
import shows from '../../../../../public/shows/shows';
import Image from 'next/image';
import close from '../../../../../public/icons/close.svg';
import { useEffect, useRef, useState } from 'react';

export default function Page({ params: { id } }: { params: { id: string } }) {
	const [show, setShow] = useState<hakflixShow>();
	const router = useRouter();
	const dialogRef = useRef<HTMLDivElement>(null);

	// useEffect(() => {
	// 	console.log('DETAIL PAGE');
	// 	setShow(shows.find((show) => show.id.toString() == id));
	// 	document.body.style.overflow = 'hidden';
	// }, [show, id]);

	function redirectHome() {
		document.body.style.overflow = 'unset';
		router.back();
	}

	function scrollToTop() {
		if (dialogRef.current) {
			dialogRef.current.scroll({
				top: 0,
				behavior: 'smooth',
			});
		}
	}

	if (show) {
		return (
			<div className='w-full h-full fixed z-40 flex items-end justify-center'>
				<div
					className='absolute z-50 w-3/6 max-sm:w-[90%] h-[95%] max-sm:h-[85%] text-white show-popup rounded-md overflow-auto'
					ref={dialogRef}
				>
					<div className='w-full h-[60%] max-sm:h-[35%] relative'>
						<Image
							src={show.thumb.src}
							width={show.thumb.width}
							height={show.thumb.height}
							alt={show.title}
							className='w-full h-full object-cover rounded-t-md detail-thumb'
						/>
						<div className='thumb-overlay'></div>
						<div
							className='absolute top-0 right-0 mt-3 mr-3 w-10 h-10 max-sm:w-8 max-sm:h-8 bg-[#181818] cursor-pointer rounded-full flex items-center justify-center'
							onClick={redirectHome}
						>
							<Image
								src={close}
								alt='Close Detail'
								className='w-6 h-6 max-sm:w-4 max-sm:h-auto'
							/>
						</div>
					</div>
					<div className='py-4 px-8 max-sm:py-2 max-sm:px-4 flex justify-between max-sm:flex-col max-sm:gap-2'>
						<div className='flex flex-col gap-4 w-[65%] max-sm:w-full'>
							<h1 className='text-2xl font-bold'>{show.title}</h1>
							<p className='max-sm:hidden leading-relaxed whitespace-pre-line'>
								{show.description}
							</p>
						</div>
						<div className='show-infos flex flex-col gap-3 max-sm:mb-8 max-sm:gap-1'>
							<p className='text-sm'>
								<span className='text-sm show-info-span'>Cast: </span>
								{show.cast}
							</p>
							<p className='text-sm'>
								<span className='text-sm show-info-span'>Written by: </span>
								{show.writtenBy}
							</p>
							<p className='text-sm'>
								<span className='text-sm show-info-span'>Genres: </span>
								{show.genres.join(', ')}
							</p>
						</div>
						<p className='max-sm:block hidden whitespace-pre-line'>
							{show.description}
						</p>
					</div>
					<div
						onClick={scrollToTop}
						className='button primary font-bold max-sm:text-sm my-8 mx-8 max-sm:my-12 max-sm:mx-4'
					>
						Zurück zum Anfang
					</div>
				</div>
				<div
					className='w-full h-full fixed z-40 bg-black bg-opacity-70'
					onClick={redirectHome}
				></div>
			</div>
		);
	}
}
