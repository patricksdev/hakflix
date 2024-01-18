import { Router } from 'next/router';
import { hakflixShow } from '../../../public/shows/shows';
import shows from '../../../public/shows/shows';
import { redirect } from 'next/navigation';

export default function ShowDetail(props: any) {
	const show = shows[props.showId - 1];

	if (show) {
		return (
			<div className='w-full h-full fixed z-40 flex items-end justify-center'>
				<div className='absolute z-50 w-3/6 h-[90%] mt-auto text-white show-popup rounded-md'>
					<img
						src={show.thumb.src}
						className='rounded-t-md'
					/>
					<h1>{show.title}</h1>
				</div>
				<div className='w-full h-full fixed z-40 bg-black bg-opacity-70'></div>
			</div>
		);
	}
}
